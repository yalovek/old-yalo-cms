import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles';

class Component extends React.Component {
  render() {
    const head = Helmet.rewind();

    return <html {...head.htmlAttributes.toComponent()}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        <style>{styles}</style>
        <style data-aphrodite>{this.props.css.content}</style>
      </head>
      <body>
        <div className="app" id="app" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
      </body>
    </html>;
  }
}

export default Component;
