import React, { Component } from 'react';

import NoQuotes from './noQuotes';

import styles from './styles.module.css';

export class Quotes extends Component {
  render() {
    const quotes = this.props.quotes;

    return (
      <div>
        {quotes.length === 0 ? (
          <NoQuotes />
        ) : (
          <div>
            {quotes.map(quote => (
              <div className={styles.quote_cnt}></div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Quotes;
