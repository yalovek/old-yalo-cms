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
// import { Html } from '../components';
import { query as homeQuery } from './home';
import Page, { query as pageQuery } from './page';
import Error from './error';

export default <Router history={browserHistory}
  render={applyRouterMiddleware(useRelay)} environment={Relay.Store}>
  <Route path='/'>
    <IndexRoute component={Page} queries={homeQuery} />
    <Route path='/:name' component={Page} queries={pageQuery} />
    <Route path='*' component={Error} />
  </Route>
</Router>;
