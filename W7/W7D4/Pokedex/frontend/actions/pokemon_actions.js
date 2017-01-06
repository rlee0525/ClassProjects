import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";
export const RECEIVE_CREATE_POKEMON = "RECEIVE_CREATE_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveOnePokemon = pokemonDetail => ({
  type: RECEIVE_ONE_POKEMON,
  pokemonDetail
});

export const receiveCreatePokemon = newPokemon => ({
  type: RECEIVE_CREATE_POKEMON,
  newPokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestOnePokemon = (id) => (dispatch) => {
  return APIUtil.fetchOnePokemon(id)
    .then(pokemonDetail => dispatch(receiveOnePokemon(pokemonDetail)));
};

export const requestCreatePokemon = (pokemon) => (dispatch) => {
  return APIUtil.createPokemon(pokemon)
    .then(newPokemon => dispatch(receiveCreatePokemon(newPokemon)));
};
