import React, { Component } from "react";
import { ThemeProvider } from "emotion-theming";

import About from "./pages/About.js";
import Global from "./injectGlobals";
import { theme } from "./theme.js";
/* import PortfolioProject from "./components/PortfolioProject"; */

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Global>
          <About />
        </Global>
      </ThemeProvider>
    );
  }
}

export default App;
