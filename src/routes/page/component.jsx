import React from 'react';
import { css } from 'aphrodite';
import Layout from '../../components/layout';

class Component extends React.Component {
  render() {
    return <Layout>{this.props.viewer && JSON.parse(this.props.viewer.components)}</Layout>;
  }
}

export default Component;
