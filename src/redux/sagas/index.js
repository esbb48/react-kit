import { fork, all, takeLatest } from 'redux-saga/effects';
import types, { basicAsyncActionTypes } from 'redux/actionTypes';
import { toCamelStyle } from 'utils/format';

import * as authSagas from './authSagas';
import * as userSagas from './userSagas';

const allSaga = {
  ...authSagas,
  ...userSagas,
};

const getMatchedSaga = actionType => {
  const camelActionType = toCamelStyle(actionType);
  const matchedSaga = allSaga[`${camelActionType}Saga`];
  return matchedSaga || null;
};

export default function* startForman() {
  let sagas = [];
  basicAsyncActionTypes.forEach(actionType => {
    const currentSaga = getMatchedSaga(actionType);
    if (!currentSaga) {
      console.error(`NOT DEFINED SAGA FOR: ${actionType}`);
      return;
    }

    const generatingFunction = function* () {
      yield takeLatest(types[actionType], currentSaga);
    };
    sagas.push(fork(generatingFunction));
  });
  yield all(sagas);
}
