import types from './types';

export default function (obj) {
  return Object.keys(types).reduce((result, type) => {
    if (obj instanceof type) {
      return type.type;
    }

    return result;
  }, null);
}
