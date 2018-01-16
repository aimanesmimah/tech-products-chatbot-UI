import React, { Component } from 'react';
import AppTemplate from './components/appTemplate';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <AppTemplate title="new" />
      </div>
    );
  }
}

export default App;
