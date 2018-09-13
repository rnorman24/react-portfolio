import React, { Component } from "react";
import PortfolioNav from "./components/PortfolioNav.js";
import About from "./components/About.js";
import PortfolioProject from "./components/PortfolioProject";

class App extends Component {
  render() {
    return (
      <div className="App Grid">
        <About />
        <PortfolioProject />
      </div>
    );
  }
}

export default App;
