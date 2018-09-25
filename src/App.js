import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";

import Home from "./pages/Home";
import Global from "./injectGlobals";
import { theme } from "./theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Global>
          <Home />
        </Global>
      </ThemeProvider>
    );
  }
}

export default App;
