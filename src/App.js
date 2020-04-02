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
  };

  render() {
    return (
      <div>
        {this.state.home ? <Home selectMovie={this.selectMovie} /> : <Result />}
        <button onClick={this.toggleHome}>Change</button>
      </div>
    );
  }
}

export default App;
