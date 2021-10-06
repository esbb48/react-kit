import types from 'redux/actionTypes';

export const snackbarMiddleware = store => next => action => {
  if (action?.snackbar) {
    next({ type: types.OPEN_SNACK_BAR, payload: action.snackbar });
  }

  return next(action);
};
