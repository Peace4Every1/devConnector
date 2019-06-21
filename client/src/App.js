import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthToken from "./util/setAuthToken";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { loadUser } from "./actions/auth";
//Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import WithContainer from "./WithContainer";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); //[] is for not making it an endless loop, but run once on mounting

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={WithContainer} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
