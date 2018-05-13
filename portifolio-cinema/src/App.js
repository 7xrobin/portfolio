import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Robin</h1>
          <p className="App-intro">
              Developer Portifólio
          </p>  
          <span>
              In Progress
          </span>
        </header>
      </div>
    );
  }
}

export default App;
