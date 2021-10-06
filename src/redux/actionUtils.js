import types from './actionTypes';

export const createAction = ACTION_KEY => payload => ({
  type: types[ACTION_KEY] ?? `?? UNDEFINED_ACTION_KEY：${ACTION_KEY} ??`,
  payload,
});
