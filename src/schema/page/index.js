import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import type from './type';
import model from './model';
import { registerType } from '../types';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    viewer: {
      type,
      args: {
        name: {
          name: 'name',
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (root, params) => model.findOne({
        name: params.name,
      }),
    },
  }),
});

registerType(type, query, model);

export default query;
