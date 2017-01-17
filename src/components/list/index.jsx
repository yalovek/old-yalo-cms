import React from 'react';
import { css } from 'aphrodite';
import Item from './item';
import styles from './styles';

class Component extends React.Component {
  render() {
    return <ul className={css(styles.list)}>{this.props.children}</ul>;
  }
}

export { Component as List, Item as ListItem };
