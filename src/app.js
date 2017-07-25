import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './app.css';
import Zones from './components/Zones';

class App extends Component {
  render() {
    return (
      <div>
        Hello World! How are you today??
        <Zones />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
