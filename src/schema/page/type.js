import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from '../node-definitions';

export default new GraphQLObjectType({
  name: 'Page',
  description: 'A page',
  fields: () => ({
    id: globalIdField('Page'),
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    components: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
  interfaces: [
    nodeInterface,
  ],
});
