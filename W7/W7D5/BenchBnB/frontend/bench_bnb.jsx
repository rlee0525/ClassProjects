import React from 'react';
import ReactDOM from 'react-dom';

// TODO:
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import { receiveCurrentUser } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB!</h1>, root);

// TODO:
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.store = store;
  window.receiveCurrentUser = receiveCurrentUser;
});
