import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Common/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//@TODO remove this global variable before final deployment
window.APPSTORE=store;

ReactDOM.render(
<Provider store={store}>
<App />, 
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();