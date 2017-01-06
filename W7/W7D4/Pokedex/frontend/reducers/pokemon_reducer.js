import { RECEIVE_ALL_POKEMON, RECEIVE_CREATE_POKEMON } from '../actions/pokemon_actions';

import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_CREATE_POKEMON:
      return merge({}, state, {pokemon: action.newPokemon});
    default:
      return state;
  }
};

export default pokemonReducer;
