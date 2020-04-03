import React, { Component } from 'react';
import axios from 'axios';

import Home from './components/Home';
import Result from './components/Result';

export class App extends Component {
  state = {
    home: true,
    movie: ''
  };

  componentDidMount() {
    axios
      .get('https://cite-api.herokuapp.com/wakeup')
      .then(res => {
        if (res.data.code === 200) {
          console.log('The backend has been AWOKEN!');
        }
      })
      .catch(er => {
        console.log('Unable to contact Backend :/', er);
      });
  }

  toggleHome = () => {
    this.setState(oldState => {
      return {
        home: !oldState.home
      };
    });
  };

  selectMovie = movie => {
    this.setState({
      movie
    });

    this.toggleHome();
  };

  render() {
    return (
      <div>
        {this.state.home ? (
          <Home selectMovie={this.selectMovie} />
        ) : (
          <Result movie={this.state.movie} toggleHome={this.toggleHome} />
        )}
      </div>
    );
  }
}

export default App;
