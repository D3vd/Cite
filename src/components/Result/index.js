import React, { Component } from 'react';

import Header from './header';
import Banner from './banner';

import styles from './styles.module.css';

export class Result extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header toggleHome={this.props.toggleHome} />
        <Banner movie={this.props.movie} />
      </div>
    );
  }
}

export default Result;
