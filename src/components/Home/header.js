import React, { Component } from 'react';

import styles from './styles.module.css';

export class Header extends Component {
  render() {
    return (
      <div className={styles.heading_cnt}>
        <h1 className={styles.heading}>Cite</h1>
      </div>
    );
  }
}

export default Header;
