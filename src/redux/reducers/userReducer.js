import produce from 'immer';
import types from 'redux/actionTypes';
import { userState } from './initialState';
import { deleteById } from '../reducerUtils';
const userReducer = produce((state, { type, payload, reqPayload }) => {
  switch (type) {
    case types.GET_USERS_SUCCESS:
      state.rows = payload.rows;
      state.total = payload.total;
      return;
    case types.DELETE_USER_SUCCESS:
      deleteById(state, reqPayload.userId, 'id');
      return;
    default:
      return state;
  }
}, userState);
export default userReducer;
