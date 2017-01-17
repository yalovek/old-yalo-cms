import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';
import Title from './title';

class Component extends React.Component {
  render() {
    return <div className={css(styles.hero)}>
      <div className={css(styles.container)}>{this.props.children}</div>
    </div>;
  }
}

export { Component as Hero, Title as HeroTitle };
