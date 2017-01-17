import React from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';
import styles from './styles';
import { Grid, GridItem } from '../grid';
import Logo from '../logo';
import { List, ListItem } from '../list';

function Component() {
  return <footer className={css(styles.footer)}>
    <Grid>
      <GridItem>
        <Link className={css(styles.logo)} to="/">
          <Logo className={css(styles.logo)} />
        </Link>
      </GridItem>

      <GridItem>
        <List>
          <ListItem>
            <b>телефон: </b>
            <a className={css(styles.link)} href="tel:88001234567">8 (800) 123-45-67</a>
          </ListItem>

          <ListItem>
            <b>email: </b>
            <a className={css(styles.link)} href="mailto:mail@couponad.ru">mail@couponad.ru</a>
          </ListItem>

          <ListItem>
            <b>адрес: </b>
            <address className={css(styles.address)}>Санкт-Петербург</address>
          </ListItem>
        </List>
      </GridItem>

      <GridItem>
        <b className={css(styles.social_title)}>Мы в социальных сетях</b>

        <List>
          <ListItem>
            <a className={css(styles.link)} href="https://vk.com" target="_blank">vk</a>
          </ListItem>
          <ListItem>
            <a className={css(styles.link)} href="https://instagram.com" target="_blank">instagram</a>
          </ListItem>
        </List>
      </GridItem>
    </Grid>
  </footer>;
}

export default Component;
