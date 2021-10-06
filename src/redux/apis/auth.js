import { mockServer } from './index';

export const loginResult = () =>
  mockServer.get('/auth/login', { userName: 'Admin' });
export const logoutResult = () => mockServer.get('/auth/logout');
