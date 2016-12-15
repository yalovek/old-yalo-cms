const types = {};

export const registerType = (type, query, model) => {
  types[type.name] = {
    type,
    query,
    model,
  };
};

export default types;
