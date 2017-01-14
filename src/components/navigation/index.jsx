import React from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';
import styles from './styles';

class Component extends React.Component {
  render() {
    return <nav className={this.props.className}>
      <Link className={css(styles.link)} to="/news" activeClassName={css(styles.active)}>Новости</Link>
      <Link className={css(styles.link)} to="/webmaster" activeClassName={css(styles.active)}>Вебмастерам</Link>
      <Link className={css(styles.link)} to="/advertiser" activeClassName={css(styles.active)}>Рекламодателям</Link>
      <Link className={css(styles.link)} to="/login" activeClassName={css(styles.active)}>Вход</Link>
      <Link className={css(styles.link)} to="/signup" activeClassName={css(styles.active)}>Регистрация</Link>
    </nav>;
  }
}

export default Component;
