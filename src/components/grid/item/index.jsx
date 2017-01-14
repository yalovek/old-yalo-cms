import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';

class Component extends React.Component {
  render() {
    return <div className={css(styles[`item_${this.props.size || 1}`])}>{this.props.children}</div>;
  }
}

export default Component;

