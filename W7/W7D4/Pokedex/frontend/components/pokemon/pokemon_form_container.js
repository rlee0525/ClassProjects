import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { requestCreatePokemon } from '../../actions/pokemon_actions';

const mapDispatchToProps = dispatch => ({
  requestCreatePokemon: (newPokemon) => dispatch(requestCreatePokemon(newPokemon))
});

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);
