import React, { Component } from 'react';

import styles from './styles.module.css';

export class Banner extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className={styles.banner_cnt}>
        <div>
          <img
            className={styles.banner_poster}
            src={movie.image}
            alt={movie.name}
          />
        </div>
        <div className={styles.banner_details}>
          <h1 className={styles.banner_title}>{movie.name}</h1>
          <div className={styles.banner_year}>
            <b>Year :{'  '}</b>
            {movie.year}
          </div>
          <div className={styles.banner_link}>
            <b>IMDB Page :{'  '}</b>
            <a
              href={`https://www.imdb.com/title/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >{`www.imdb.com/title/${movie.id}`}</a>
          </div>
          <div className={styles.banner_quotes}>
            <b>Quotes Found :</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
