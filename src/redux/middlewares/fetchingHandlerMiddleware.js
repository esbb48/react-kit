import types, { basicAsyncActionTypes } from 'redux/actionTypes';

const responseRegExp = /_SUCCESS|_ERROR/;

export const startFetchingMiddleware = store => next => action => {
  const actionType = action.type;
  const isAsyncAction = basicAsyncActionTypes.includes(actionType);
  if (isAsyncAction) {
    const sourceActionType = actionType.replace(responseRegExp, '');
    next({
      type: types.START_FETCHING,
      payload: {
        current: actionType,
        source: sourceActionType,
      },
    });
  }
  return next(action);
};

export const stopFetchingMiddleware = store => next => action => {
  const actionType = action.type;
  const sourceActionType = actionType.replace(responseRegExp, '');
  const isApiResponse = responseRegExp.test(actionType);
  const isAsyncAction = basicAsyncActionTypes.includes(sourceActionType);
  if (isApiResponse && isAsyncAction) {
    next({
      type: types.STOP_FETCHING,
      payload: {
        current: actionType,
        source: sourceActionType,
      },
    });
  }
  return next(action);
};
