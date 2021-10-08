import { mockServer } from './index';
import { rows } from '../mock/user';

export const loginResult = () => mockServer.get('/auth/login', rows[0]);
export const logoutResult = () => mockServer.get('/auth/logout');
