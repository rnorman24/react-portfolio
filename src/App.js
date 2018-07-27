import React, { Component } from 'react';
import PortfolioNav from './components/PortfolioNav.js';
import About from './components/About.js';

class App extends Component {
  render() {
    return (
      <div>
      <PortfolioNav />
      <About />
      </div>
    );
  }
}

export default App;
