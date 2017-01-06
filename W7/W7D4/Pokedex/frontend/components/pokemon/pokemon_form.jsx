import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "fire",
      attack: "",
      defense: "",
      move1: "",
      move2: "",
      moves: []
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestCreatePokemon(this.state).then((newPokemon) => {
        this.props.router.push(`pokemon/${newPokemon.id}`);
      });
  }

  render() {
    return (
      <div className='pokemon-form'>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input type="text"
              value={this.state.name}
              onChange={this.update('name')} />
          </label>
          <label>Image URL:
            <input type="text"
              value={this.state.image_url}
              onChange={this.update('image_url')} />
          </label>
          <label>Type:
            <select>
              <option value="fire">Fire</option>
              <option value="electric">Electric</option>
              <option value="normal">Normal</option>
              <option value="ghost">Ghost</option>
              <option value="psychic">Psychic</option>
              <option value="water">Water</option>
              <option value="bug">Bug</option>
              <option value="dragon">Dragon</option>
              <option value="grass">Grass</option>
              <option value="fighting">Fighting</option>
              <option value="ice">Ice</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="rock">Rock</option>
              <option value="steel">Steel</option>
            </select>
          </label>
          <label>Attack:
            <input type="text"
              value={this.state.attack}
              onChange={this.update('attack')} />
          </label>
          <label>Defense:
            <input type="text"
              value={this.state.defense}
              onChange={this.update('defense')} />
          </label>
          <label>Move1:
            <input type="text"
              value={this.state.move1}
              onChange={this.update('move1')} />
          </label>
          <label>Move2:
            <input type="text"
              value={this.state.move2}
              onChange={this.update('move2')} />
          </label>

          <button>Create Pokemon!</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PokemonForm);
