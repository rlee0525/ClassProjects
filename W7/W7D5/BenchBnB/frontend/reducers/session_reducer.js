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
    let currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
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
