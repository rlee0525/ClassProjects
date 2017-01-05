import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      <img src={pokemon.image_url} height="100px" />
      {pokemon.name}
    </Link>
  </li>
);

export default PokemonIndexItem;
