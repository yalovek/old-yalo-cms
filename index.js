import mongoose from 'mongoose';
import express from 'express';
import Relay from 'react-relay';
import expressGraphQL from 'express-graphql';
import IsomorphicRouter from 'isomorphic-relay-router';
import { match } from 'react-router';
import { renderToString } from 'react-dom/server';
import cluster from 'cluster';
import config from './src/config';
import routes from './src/routes';
import schema from './src/schema';
import components from './src/components';

mongoose.Promise = global.Promise;
mongoose.connect(config.get('MONGODB_URL'));

const networkLayer = new Relay.DefaultNetworkLayer(config.get('GRAPHQL_URL'));
const app = express();

app.use('/graphql', expressGraphQL(req => ({
  schema,
  graphiql: true,
  rootValue: {
    request: req,
  },
  pretty: config.get('NODE_ENV') !== 'production',
})));

function render(res) {
  return ({ props }) => {
    res.status(200).send(`<!doctype html>${
      renderToString(components.app(renderToString(IsomorphicRouter.render(props))))
    }`);
  };
}

app.get('*', (req, res, next) => {
  match({
    routes,
    location: req.url,
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      IsomorphicRouter.prepareData(renderProps, networkLayer).then(render(res)).catch(next);
    } else {
      res.status(404).send('Not found');
    }
  });
});

if (cluster.isMaster) {
  for (let i = 0; i < config.get('WEB_CONCURRENCY'); i++) { // eslint-disable-line no-plusplus
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    /* eslint-disable no-console */
    console.log(`worker ${worker.process.pid} died`);
    /* eslint-enable no-console */
  });
} else {
  app.listen(config.get('PORT'), () => {
    /* eslint-disable no-console */
    console.log(`The server is running at http://localhost:${config.get('PORT')}/`);
    /* eslint-enable no-console */
  });
}
