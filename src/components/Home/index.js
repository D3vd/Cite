import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

import Header from './header';
import Searchbar from './searchbar';

import styles from './styles.module.css';

export class Home extends Component {
  state = {
    query: ''
  };

  onQueryChange = e => {
    let query = e.target.value;

    this.setState({
      query
    });

    if (query !== '') {
      fetchJsonp(
        `https://v2.sg.media-imdb.com/suggests/${query[0]}/${query}.json`,
        {
          jsonpCallbackFunction: `imdb$${query.replace(' ', '_')}`
        }
      )
        .then(res => {
          return res.json();
        })
        .then(json => {
          console.log(json);
        })
        .catch(ex => {
          console.log(ex);
        });
    }
  };

  render() {
    return (
      <div className={styles.home_cnt}>
        <Header />
        <Searchbar onQueryChange={this.onQueryChange} />
      </div>
    );
  }
}

export default Home;
