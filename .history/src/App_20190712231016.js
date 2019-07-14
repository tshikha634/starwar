import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Logout = Loadable({
  loader: () => import('./views/Pages/logout'),
  loading
});

// const Register = Loadable({
//   loader: () => import('./views/Pages/Register'),
//   loading
// });


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route exact path="/register" name="Register Page" component={Register} /> */}
          {/* <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route exact path="/password" name="password" component={DefaultLayout} /> */}
          <Route path="/" name="Login Page" component={Login} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
