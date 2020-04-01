import React, { Component } from 'react';

import Home from './components/Home';
import Result from './components/Result';

export class App extends Component {
  state = {
    home: true,
    imdb_id: ''
  };

  toggleHome = () => {
    this.setState(oldState => {
      return {
        home: !oldState.home
      };
    });
  };

  render() {
    return (
      <div>
        {this.state.home ? <Home /> : <Result />}
        <button onClick={this.toggleHome}>Change</button>
      </div>
    );
  }
}

export default App;
