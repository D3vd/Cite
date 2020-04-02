import React, { Component } from 'react';

import Header from './header';

import styles from './styles.module.css';

export class Result extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header toggleHome={this.props.toggleHome} />
      </div>
    );
  }
}

export default Result;
