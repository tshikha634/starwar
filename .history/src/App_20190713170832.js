import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.scss';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Login = Loadable({
  loader: () => import('./Views/Login/Login'),
  loading
});

// const Logout = Loadable({
//   loader: () => import('./Views/logout'),
//   loading
// });

// const Register = Loadable({
//   loader: () => import('./views/Pages/Register'),
//   loading
// });

const Search = Loadable({
  loader: () => import('./Views/SearchPlanets/SearchPlanets'),
  loading
});

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route exact path="/register" name="Register Page" component={Register} /> */}
          {/* <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route exact path="/password" name="password" component={DefaultLayout} /> */}
          <Route exact path="/" name="Login Page" component={Login} />
          <Route exact path="/searchplanets" name="Search Page" component={Search} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
