import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import AppNavBar from "./components/AppNavBar/AppNavBar.jsx";
import PageRoute from "./components/UserRoute/PageRoute.jsx";
import "./index.css";
import * as routes from "./routes/userRoutes.js";

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Route path="/" component={AppNavBar} />
        <Switch>
          <PageRoute path={routes.PAGE_INDEX} />
          <PageRoute path={routes.PAGE_SERVE} />
          <PageRoute path={routes.PAGE_SELF} />
          <PageRoute path={routes.PAGE_NOTIF} />
          <PageRoute path={routes.PAGE_ORDER} />
          <Redirect exact path="/" to="/index" />
        </Switch>
      </div>
    );
  }
}

const IndexRouter = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(<IndexRouter />, document.getElementById("root"));
