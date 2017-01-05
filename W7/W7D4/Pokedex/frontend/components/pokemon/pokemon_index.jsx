import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.pokemon.map((poke, i) => (
            <li key={i}>
              <img src={poke.image_url} height="100px" />
              {poke.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
