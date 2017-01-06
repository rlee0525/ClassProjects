import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { receiveCreatePokemon } from '../../actions/pokemon_actions';

const mapDispatchToProps = dispatch => ({
  receiveCreatePokemon: (newPokemon) => dispatch(receiveCreatePokemon(newPokemon))
});

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);
