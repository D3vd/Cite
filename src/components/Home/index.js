import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

import Header from './header';
import Searchbar from './searchbar';
import Suggestions from './suggestions';

import styles from './styles.module.css';

export class Home extends Component {
  state = {
    query: '',
    suggestions: []
  };

  onQueryChange = e => {
    let query = e.target.value.toLowerCase();

    this.setState({
      query
    });

    if (query !== '') {
      fetchJsonp(
        `https://v2.sg.media-imdb.com/suggests/${query[0]}/${query}.json`,
        {
          jsonpCallbackFunction: `imdb$${query.replace(/ /g, '_')}`
        }
      )
        .then(res => {
          return res.json();
        })
        .then(json => {
          this.parseJSON(json);
        })
        .catch(ex => {
          console.log(ex);
        });
    }
  };

  parseJSON = json => {
    let suggestions = [];

    json.d.forEach(element => {
      // Check if the suggestion is a movie / show
      if ('y' in element) {
        let image = '';

        if (element.i[0] !== undefined) {
          image = element.i[0];
        }

        suggestions.push({
          name: element.l,
          year: element.y,
          id: element.id,
          image
        });
      }
    });

    this.setState({
      suggestions
    });
  };

  render() {
    return (
      <div className={styles.home_cnt}>
        <Header />
        <Searchbar onQueryChange={this.onQueryChange} />
        <Suggestions
          suggestions={this.state.suggestions}
          selectMovie={this.props.selectMovie}
        />
      </div>
    );
  }
}

export default Home;
