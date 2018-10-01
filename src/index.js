import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PageRoute from "./components/UserRoute/PageRoute.jsx";
import * as routes from "./routes/userRoutes.js";
import reducer from "./store/reducer.js";
import "./index.css";

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='app'>
          <PageRoute path={routes.PAGE_ROOT} />
          <Switch>
            <PageRoute path={routes.PAGE_INDEX} />
            <PageRoute path={routes.PAGE_SERVE} />
            <PageRoute path={routes.PAGE_SELF} />
            <PageRoute path={routes.PAGE_NOTIF} />
            <PageRoute path={routes.PAGE_ORDER} />
            <Redirect exact path="/" to="/index" />
          </Switch>
        </div>
      </Provider>
    );
  }
}

const IndexRouter = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(<IndexRouter />, document.getElementById("root"));