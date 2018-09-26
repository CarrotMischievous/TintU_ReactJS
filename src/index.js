import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from "./components/AppNavBar/AppNavBar.jsx";
import "./style/index.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={AppNavBar} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
