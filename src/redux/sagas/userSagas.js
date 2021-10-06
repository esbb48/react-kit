import types from 'redux/actionTypes';
import { deleteUserResult, getUsersResult } from 'redux/apis/user';
import fetchAPIResult from 'redux/sagaUtils';

export function* deleteUserSaga({ payload }) {
  return yield fetchAPIResult({
    apiResult: deleteUserResult,
    action: types.DELETE_USER,
    payload,
    message: '刪除成功',
  });
}

export function* getUsersSaga({ payload }) {
  return yield fetchAPIResult({
    apiResult: getUsersResult,
    action: types.GET_USERS,
    payload,
  });
}
