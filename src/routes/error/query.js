import Relay from 'react-relay';

export default {
  viewer: Component => Relay.QL`
    query {
      viewer(name: "error") {
        ${Component.getFragment('viewer')}
      }
    }
  `,
};
