import React from 'react';
import Relay from 'react-relay';
import components, { Container } from '../../components';

class Page extends React.Component {
  render() {
    try {
      return <div>{
        JSON.parse(this.props.viewer.components).map(
          (component, key) => components[component.name](component.data, key)
        )
      }</div>;
    }
    catch(e) {
      console.error(e);
    }
  }
}

export default Relay.createContainer(Page, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Page {
        components
      }
    `
  }
});

export query from './query';
