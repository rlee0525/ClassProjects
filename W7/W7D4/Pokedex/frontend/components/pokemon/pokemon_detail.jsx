import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestOnePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    this.props.requestOnePokemon(newProps.params.pokemonId);
  }

  render() {
    const pokemon = this.props.pokemonDetail;
    let items;
    let moves;

    if (pokemon.moves) {
      moves = pokemon.moves.join(', ');
    }

    if (pokemon.items) {
      items = pokemon.items.map((item, i) => (
        <Link key={i} to={`/pokemon/${pokemon.id}/items/${item.id}`} >
          <img key={i} src={item.image_url} height="100px" />
        </Link>
      ));
    }

    return(
      <div>
          <ul>
            <img src={pokemon.image_url} height="100px" />
            <li>Name: {pokemon.name}</li>
            <li>Type: {pokemon.poke_type}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <li>Moves: {moves}</li>
            {items}
          </ul>

        {this.props.children}
      </div>
    );
  }
}

export default PokemonDetail;
