import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import pokemonDetailReducer from './pokemon_detail_reducer';
import newPokemonReducer from './new_pokmon_reducer';

export default combineReducers({
  pokemon: pokemonReducer,
  pokemonDetail: pokemonDetailReducer,
  newPokemon: newPokemonReducer
});
