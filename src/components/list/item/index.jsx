import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';

class Component extends React.Component {
  render() {
    return <li className={css(styles.item)}>{this.props.children}</li>;
  }
}

export default Component;
