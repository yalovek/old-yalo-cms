import React from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';
import styles from './styles';
import { Grid, GridItem } from '../grid';
import Logo from '../logo';

function Component() {
  return <footer className={css(styles.footer)}>
    <Grid>
      <GridItem>
        <Link className={css(styles.logo)} to="/">
          <Logo className={css(styles.logo)} />
        </Link>
      </GridItem>

      <GridItem>
        <ul className="list">
          <li className="list__item">
            <b>телефон: </b>
            <a className={css(styles.link)} href="tel:88001234567">8 (800) 123-45-67</a>
          </li>

          <li className="list__item">
            <b>email: </b>
            <a className="footer__link" href="mailto:mail@couponad.ru">mail@couponad.ru</a>
          </li>

          <li className="list__item">
            <b>адрес: </b>
            <address className="address">Санкт-Петербург</address>
          </li>
        </ul>
      </GridItem>

      <GridItem>
        <b className={css(styles.social_title)}>Мы в социальных сетях</b>

        <ul className="list list_type_inline">
          <li className="list__item">
            <a className={css(styles.link)} href="https://vk.com" target="_blank">
              <span className="icon icon_name_vk fa fa-vk fa-2x"></span>
            </a>
          </li>
          <li className="list__item">
            <a className={css(styles.link)} href="https://instagram.com" target="_blank">
              <span className="icon icon_name_instagram fa fa-instagram fa-2x"></span>
            </a>
          </li>
        </ul>
      </GridItem>
    </Grid>
  </footer>;
}

export default Component;
