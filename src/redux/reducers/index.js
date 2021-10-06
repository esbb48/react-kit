import { combineReducers } from 'redux';
import auth from './authReducer';
import common from './commonReducer';
import layout from './layoutReducer';

const reducer = combineReducers({
  auth,
  common,
  layout,
});

export default reducer;
