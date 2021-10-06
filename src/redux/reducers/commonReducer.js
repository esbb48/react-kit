import produce from 'immer';
import types from 'redux/actionTypes';
import { commonState } from './initialState';

const commonReducer = produce((state, { type, payload }) => {
  switch (type) {
    case types.STOP_FETCHING:
    default:
      return state;
  }
}, commonState);
export default commonReducer;
