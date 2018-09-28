import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import AppNavBar from "./components/AppNavBar/AppNavBar.jsx";
import "./index.css";
import {
  PAGE_INDEX,
  PAGE_SERVE,
  PAGE_SELF,
  PAGE_NOTIF,
  PAGE_ORDER,
  PageRoute
} from "./routes/pageRoutes.jsx";

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Route path="/" component={AppNavBar} />
        <Switch>
          <PageRoute path={PAGE_INDEX} />
          <PageRoute path={PAGE_SERVE} />
          <PageRoute path={PAGE_SELF} />
          <PageRoute path={PAGE_NOTIF} />
          <PageRoute path={PAGE_ORDER} />
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
