import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/infoPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <infoPane /> {/* This is not rendering */}
      </div>
    );
  }
}

export default App;
