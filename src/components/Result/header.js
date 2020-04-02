import React, { Component } from 'react';

import styles from './styles.module.css';

export class Header extends Component {
  render() {
    return (
      <div className={styles.header_cnt}>
        <h1 className={styles.heading} onClick={this.props.toggleHome}>
          Cite
        </h1>
      </div>
    );
  }
}

export default Header;
