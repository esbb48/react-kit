import { combineReducers } from 'redux';
import auth from './authReducer';
import common from './commonReducer';
import layout from './layoutReducer';
import user from './userReducer';

const reducer = combineReducers({
  auth,
  common,
  layout,
  user,
});

export default reducer;
