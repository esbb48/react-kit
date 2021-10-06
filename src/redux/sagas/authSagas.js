import types from 'redux/actionTypes';
import { loginResult, logoutResult } from 'redux/apis/auth';
import fetchAPIResult from 'redux/sagaUtils';

export function* loginSaga({ payload }) {
  return yield fetchAPIResult({
    apiResult: loginResult,
    action: types.LOGIN,
    payload,
  });
}

export function* logoutSaga() {
  return yield fetchAPIResult({
    apiResult: logoutResult,
    action: types.LOGOUT,
  });
}
