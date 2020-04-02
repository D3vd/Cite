import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import NoQuotes from './noQuotes';

import styles from './styles.module.css';

export class Quotes extends Component {
  formatQuote = line => {
    let temp = line.split(':');

    if (temp[1] === undefined) {
      return temp;
    }

    return '<b>' + temp[0] + ':</b> ' + temp[1];
  };

  render() {
    const quotes = this.props.quotes;

    return (
      <div>
        {quotes.length === 0 ? (
          <NoQuotes />
        ) : (
          <div>
            <Carousel indicators={false} className={styles.carousel}>
              {quotes.map((quote, index) => (
                <Carousel.Item>
                  <div className={styles.quote_index}>{index + 1}</div>
                  <div className={styles.quote}>
                    {quote.map(line => (
                      <div
                        className={styles.line}
                        dangerouslySetInnerHTML={{
                          __html: this.formatQuote(line)
                        }}
                      ></div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    );
  }
}

export default Quotes;
