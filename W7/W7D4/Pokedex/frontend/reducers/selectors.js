import values from 'lodash/values';

export const selectAllPokemon = (state) => values(state.pokemon);

export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
  const itemFound = pokemonDetail.items.find(item => item.id === itemId);
  return itemFound || {};
};
