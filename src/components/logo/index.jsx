import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';

function Component() {
  return <img className={css(styles.logo)} src="logo.svg" alt="CouponAd" />;
}

export default Component;
