import React from 'react';
import ReactDOM from 'react-dom';

// TODO: testing
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

  // TODO: testing
  window.store = store;
});
