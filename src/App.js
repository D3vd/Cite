import React, { Component } from 'react';

import Home from './components/Home';
import Result from './components/Result';

export class App extends Component {
  state = {
    home: true,
    movie: ''
  };

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
