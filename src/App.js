import React, { Component } from 'react';
import './App.css';
import DummyText from './components/DummyText/DummyText';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <DummyText />
      </div>
    );
  }
}

export default App;
