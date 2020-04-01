import React, { Component } from 'react';

import Header from './header';
import Searchbar from './searchbar';

import styles from './styles.module.css';

export class Home extends Component {
  render() {
    return (
      <div className={styles.home_cnt}>
        <Header />
        <Searchbar />
      </div>
    );
  }
}

export default Home;
