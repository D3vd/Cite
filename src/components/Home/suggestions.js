import React, { Component } from 'react';

// import NoSuggestions from './noSuggestions';

import styles from './styles.module.css';

export class Suggestions extends Component {
  resizeImg = link => {
    return link[0].replace('._V1_.jpg', '._V1._SX200_CR0,0,200,270_.jpg');
  };

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
                      src={this.resizeImg(suggestion.image)}
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
