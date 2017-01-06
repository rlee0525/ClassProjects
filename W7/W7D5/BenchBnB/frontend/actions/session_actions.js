import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestSignup = user => dispatch => (
  APIUtil.createUser(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)))
);

export const requestLogin = user => dispatch => (
  APIUtil.loginUser(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)))
);

export const requestLogout = () => dispatch => (
  APIUtil.logoutUser()
    .then(() => dispatch(receiveCurrentUser(null)))
);
