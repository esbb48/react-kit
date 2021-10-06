import types from 'redux/actionTypes';

export const snackbarMiddleware = store => next => action => {
  if (action?.snackbar) {
    next({ type: types.OPEN_SNACKBAR, payload: action.snackbar });
  }

  return next(action);
};
