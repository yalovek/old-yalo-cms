import Relay from 'react-relay';
import Component from './component';

export default Relay.createContainer(Component, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Page {
        components
      }
    `,
  },
});
