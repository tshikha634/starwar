import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import "./App.css";
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const Login = Loadable({
  loader: () => import("./Views/Login/Login"),
  loading
});

const Search = Loadable({
  loader: () => import("./Views/SearchPlanets/SearchPlanets"),
  loading
});

const PlanetDetails = Loadable({
  loader: () => import("./Views/SearchPlanets/PlanetDetails"),
  loading
});

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" name="Login Page" component={Login} />
          <Route
            exact
            path="/searchplanets"
            name="Search Page"
            component={Search}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
