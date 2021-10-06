import constants from 'flux-constants';

const syncActionTypes = ['START_FETCHING', 'STOP_FETCHING'];

const layoutActionTypes = ['OPEN_SNACKBAR', 'CLOSE_SNACKBAR'];

export const basicAsyncActionTypes = [
  'DELETE_USER',
  'GET_USERS',
  'LOGIN',
  'LOGOUT',
];

const asyncActionTypes = basicAsyncActionTypes.reduce((result, actionType) => {
  return [
    ...result,
    actionType,
    `${actionType}_SUCCESS`,
    `${actionType}_ERROR`,
  ];
}, []);

export default constants([
  ...syncActionTypes,
  ...asyncActionTypes,
  ...layoutActionTypes,
]);
