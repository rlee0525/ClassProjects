import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestOnePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = ({pokemonDetail}) => ({
  pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
