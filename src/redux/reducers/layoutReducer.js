import produce from 'immer';
import { layoutState } from './initialState';
import types from 'redux/actionTypes';

const layoutReducer = produce((state, { type, payload }) => {
  switch (type) {
    case types.OPEN_SNACKBAR:
      state.snackbar.id++;
      state.snackbar.status = payload.status;
      state.snackbar.text = payload.text;
      return;
    case types.STOP_FETCHING:
      delete state.fetchAction[payload.source];
      return;
    case types.START_FETCHING:
      state.fetchAction[payload.source] = true;
      return;
    default:
      return state;
  }
}, layoutState);
export default layoutReducer;
