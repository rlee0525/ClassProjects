import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        currentUser: {
          id: action.currentUser.id,
          username: action.currentUser.username
        }
      });
    case RECEIVE_ERRORS:
      return ({
        errors: action.errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
