import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';

class Component extends React.Component {
  render() {
    return <h2 className={css(styles.title)}>{this.props.children}</h2>;
  }
}

export default Component;
