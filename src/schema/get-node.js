import { fromGlobalId } from 'graphql-relay';
import types from './types';

export default function (globalId) {
  const { typeName, id } = fromGlobalId(globalId);
  const type = types[typeName];

  if (type) {
    return type.query(id);
  }

  return null;
}
