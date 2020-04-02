import React, { Component } from 'react';
import axios from 'axios';

import Header from './header';
import Banner from './banner';
import Quotes from './quotes';

import Error from './error';
import Loading from './loading';

import styles from './styles.module.css';

export class Result extends Component {
  state = {
    quotes: null,
    loading: true,
    error: ''
  };

  componentDidMount() {
    let id = this.props.movie.id;

    axios
      .get(`https://cite-api.herokuapp.com/movie/${id}`)
      .then(res => {
        let data = res.data;

        if (data.code !== 200) {
          this.setState({
            loading: false,
            error: 'Unable to find movie with the IMDB Id'
          });
        } else if (data.code === 200) {
          this.setState({
            quotes: data.quotes,
            loading: false
          });
        } else {
          this.setState({
            loading: false,
            error: 'Unknown Error'
          });
        }
      })
      .catch(er => {
        this.setState({
          loading: false,
          error: 'Unknown Error'
        });
        console.log(er);
      });
  }

  render() {
    return (
      <div className={styles.container}>
        <Header toggleHome={this.props.toggleHome} />
        <Banner movie={this.props.movie} />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            {this.state.error !== '' ? (
              <Error message={this.state.error} />
            ) : (
              <Quotes quotes={this.state.quotes} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Result;
