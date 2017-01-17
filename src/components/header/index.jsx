import React from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';
import styles from './styles';
import { Grid, GridItem } from '../grid';
import Logo from '../logo';
import Navigation from '../navigation';

function Component() {
  return <header className={css(styles.header)}>
    <Grid>
      <GridItem>
        <Link className={css(styles.logo)} to="/">
          <Logo />
        </Link>
      </GridItem>

      <GridItem size="2">
        <Navigation className={css(styles.navigation)} />
      </GridItem>
    </Grid>
  </header>;
}

export default Component;
