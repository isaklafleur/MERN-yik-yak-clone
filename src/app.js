import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './app.css';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        YakYik!
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
