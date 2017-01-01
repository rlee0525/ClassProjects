import { connect } from 'react-redux';
import Recorder from './recorder';
import { startRecording, stopRecording } from '../../actions/tracks_actions';

const mapStateToProps = ({ tracks, isRecording }) => ({
  tracks,
  isRecording
});

const mapDispatchToProps = dispatch => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
