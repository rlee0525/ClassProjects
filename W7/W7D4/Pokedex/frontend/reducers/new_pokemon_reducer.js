import { RECEIVE_CREATE_POKEMON } from '../actions/pokemon_actions';

const newPokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CREATE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default newPokemonReducer;
