import React, { Component } from 'react';

// import NoSuggestions from './noSuggestions';

import styles from './styles.module.css';

export class Suggestions extends Component {
  render() {
    let suggestions = this.props.suggestions;

    return (
      <div className={styles.suggestions_cnt}>
        <div className={styles.movies_cnt}>
          {suggestions.length === 0 ? (
            ''
          ) : (
            <div className={styles.movies_cnt}>
              {suggestions.map(suggestion => (
                <div
                  className={styles.movie_cnt}
                  onClick={() => this.props.selectMovie(suggestion)}
                >
                  <div className={styles.poster_cnt}>
                    <img
                      src={suggestion.image}
                      alt={suggestion.name}
                      className={styles.poster}
                    />
                  </div>
                  <div className={styles.movie_title}>
                    {suggestion.name} ({suggestion.year})
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Suggestions;
