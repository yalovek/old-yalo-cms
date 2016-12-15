import { nodeDefinitions } from 'graphql-relay';
import getNode from './get-node';
import getNodeType from './get-node-type';

export const { nodeInterface, nodeField } = nodeDefinitions(getNode, getNodeType);
