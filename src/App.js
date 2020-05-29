import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
import NavComponent from './components/NavComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavComponent/>
        <MainComponent/>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
