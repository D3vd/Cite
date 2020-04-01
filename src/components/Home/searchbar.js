import React, { Component } from 'react';

import styles from './styles.module.css';

export class Searchbar extends Component {
  render() {
    return (
      <div className={styles.searchbar_cnt}>
        <input
          type="text"
          name="query"
          id="query"
          className={styles.searchbar}
          placeholder="Start Typing for Suggestions"
        />
      </div>
    );
  }
}

export default Searchbar;
