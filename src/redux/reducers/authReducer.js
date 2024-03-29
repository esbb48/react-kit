import produce from 'immer';
import types from 'redux/actionTypes';
import { authState } from './initialState';

const loginSuccess = (state, payload) => {
  state.isAuth = true;
  state.userName = payload.userName;
  return state;
};

const authReducer = produce((state, { type, payload }) => {
  switch (type) {
    case types.LOGOUT_SUCCESS:
      return authState;
    case types.LOGIN_SUCCESS:
      return loginSuccess(state, payload);
    default:
      return state;
  }
}, authState);
export default authReducer;
