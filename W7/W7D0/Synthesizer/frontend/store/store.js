import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const preloadedState = {
  notes: [],
  isRecording: false,
  tracks: {},
  isPlaying: false
};

const configureStore = (state = preloadedState) => (
  createStore(
    rootReducer,
    state
  )
);

export default configureStore;
