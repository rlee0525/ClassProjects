import React from 'react';
import ReactDOM from 'react-dom';

import { requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';

import { selectAllPokemon } from './reducers/selectors';

import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Pokemon</h1>, root);

  window.requestAllPokemon = requestAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.store = store;

  window.selectAllPokemon = selectAllPokemon;
});
