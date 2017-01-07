import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// TODO: testing
// import { requestLogin } from './util/session_api_util';
import { loginUser } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);

  // TODO: testing
  window.store = store;
  window.loginUser = loginUser;
});
