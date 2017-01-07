import Greeting from './greeting';
import { connect } from 'react-redux';
import { requestLogout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestLogout: () => dispatch(requestLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
