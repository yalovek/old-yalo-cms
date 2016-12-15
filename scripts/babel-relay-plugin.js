import babelRelayPlugin from 'babel-relay-plugin';
import schema from '../src/schema/schema.json';

export default babelRelayPlugin(schema.data);
