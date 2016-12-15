import fs from 'fs';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';
import chalk from 'chalk';
import schema from '../src/schema/';

const jsonFile = path.join(__dirname, '../src/schema/schema.json');
const graphQLFile = path.join(__dirname, '../src/schema/schema.graphql');

async function updateSchema() {
  try {
    const json = await graphql(schema, introspectionQuery);

    fs.writeFileSync(jsonFile, JSON.stringify(json, null, 2));
    fs.writeFileSync(graphQLFile, printSchema(schema));

    /* eslint-disable no-console */
    console.log(chalk.green('Schema has been regenerated'));
    /* eslint-enable no-console */
  } catch (err) {
    /* eslint-disable no-console */
    console.error(chalk.red(err.stack));
    /* eslint-enable no-console */
  }
}

updateSchema();
