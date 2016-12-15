import mongoose from 'mongoose';
import chalk from 'chalk';
import config from '../../src/config';
import Page from '../../src/schema/page/model';
import pageSeed from './page';

mongoose.Promise = global.Promise;
mongoose.connect(config.get('MONGODB_URL'));

/* eslint-disable no-console */
async function populate() {
  await Page.find().remove(() => {
    console.log(chalk.green('finished cleaning Page'));
  });

  await Page.create(...pageSeed, () => {
    console.log(chalk.green('finished populating Page'));
  });

  console.log(chalk.green('finished populating db'));

  process.exit(0);
}
/* eslint-enable no-console */

populate();
