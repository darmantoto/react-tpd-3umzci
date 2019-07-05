import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router-dom';
import Navbar from './navbar';
import PokemonList from './app/pokemon_list';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

