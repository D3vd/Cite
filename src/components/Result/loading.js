import React, { Component } from 'react';

import styles from './loading.module.css';

export class Loading extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.lds_ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className={styles.heading}>Scarping Quotes from IMDB</h1>
      </div>
    );
  }
}

export default Loading;
