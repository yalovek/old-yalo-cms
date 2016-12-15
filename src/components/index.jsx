import React from 'react';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import App from './app';

export default {
  app(html) {
    console.log(html)
    return <App {...html} />;
  },
  head(head, key) {
    return <Helmet {...head} key={key} />;
  }
};
