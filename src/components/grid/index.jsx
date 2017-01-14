import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';
import Item from './item';

class Component extends React.Component {
  render() {
    return <div className={css(styles.grid)}>{this.props.children}</div>;
  }
}

export { Component as Grid, Item as GridItem };
