import React from 'react';
import {
  Router,
  browserHistory,
  applyRouterMiddleware,
  Route,
  IndexRoute,
} from 'react-router';
import useRelay from 'react-router-relay';
import Relay from 'react-relay';
import { query as homeQuery } from './home';
import { query as errorQuery } from './error';
import {
  component as pageComponent,
  query as pageQuery,
} from './page';

export default <Router history={browserHistory}
  render={applyRouterMiddleware(useRelay)} environment={Relay.Store}>
  <Route path='/'>
    <IndexRoute component={pageComponent} queries={homeQuery} />
    <Route path='/error' component={pageComponent} queries={errorQuery} />
    <Route path='/:name' component={pageComponent} queries={pageQuery} />
  </Route>
</Router>;
