import { put, select, call } from 'redux-saga/effects';

const okFetch = (payload, action, text, reqPayload) => {
  const successPayload = {
    type: `${action}_SUCCESS`,
    payload,
    reqPayload,
    snackbar: {
      status: 'success',
      text,
    },
  };

  if (text.length === 0) {
    delete successPayload.snackbar;
  }

  return successPayload;
};

const errFetch = ({ status, data }, action) => ({
  type: `${action}_ERROR`,
  payload: { code: status, data: data.data },
  snackbar: {
    status: 'error',
    text: data?.data?.message ?? '非預期錯誤，請聯繫系統管理員',
  },
});

export default function* fetchAPIResult({
  apiResult,
  headers = { 'Content-Type': 'application/json' },
  payload,
  action,
  message = '',
  resultHandler = null,
}) {
  try {
    const token = yield select(({ auth }) => auth.token);
    const { data } = yield call(apiResult, {
      customHeaders: { Authorization: `Bearer ${token}`, ...headers },
      payload,
    });

    if (typeof resultHandler === 'function') {
      return yield put(okFetch(resultHandler(data), action, message, payload));
    }

    yield put(okFetch(data, action, message, payload));
  } catch (error) {
    yield put(errFetch(error.response, action));
  }
}
