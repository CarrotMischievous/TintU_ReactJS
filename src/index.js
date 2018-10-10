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
            <PageRoute exact path={routes.PAGE_INDEX} />
            <PageRoute exact path={routes.PAGE_STORE_CHOOSE} />
            <PageRoute exact path={routes.PAGE_SERVE} />
            <PageRoute exact path={routes.PAGE_PRODUCT} />
            <PageRoute exact path={routes.PAGE_SCHEDULE_DATE} />
            <PageRoute exact path={routes.PAGE_SCHEDULE_TIME} />
            <PageRoute exact path={routes.PAGE_ORDER_ADDON} />
            <PageRoute exact path={routes.PAGE_SELF} />
            <PageRoute exact path={routes.PAGE_NOTIF} />
            <PageRoute exact path={routes.PAGE_ORDER} />
            <Redirect exact path="/" to="/tintu" />
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