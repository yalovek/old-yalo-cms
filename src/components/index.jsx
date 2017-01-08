import React from 'react';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import App from './app';

export default {
  app(data) {
    return <App html={data} />;
  },
  head(data, key) {
    return <Helmet {...data} key={key} />;
  },
  renderHtml(data, key) {
    return <div {...data} key={key} />;
  },
};
