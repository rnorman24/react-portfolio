import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";

import Home from "./pages/Home";
import About from "./pages/About";
import Global from "./injectGlobals";
import { theme } from "./theme";

const App = () => (
  <Router>
    <div>
      <ThemeProvider theme={theme}>
        <Global>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Global>
      </ThemeProvider>
    </div>
  </Router>
);

export default App;

/*
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
*/
