import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router-dom';


class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <p>
          asdfklakflka
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('app'))

