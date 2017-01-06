import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const pokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ONE_POKEMON:
      return action.pokemonDetail;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
