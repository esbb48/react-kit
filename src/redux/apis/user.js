import { rows } from 'redux/mock/user';
import { mockServer } from './index';

export const getUsersResult = () => mockServer.get('#', { rows, total: 999 });
export const deleteUserResult = () => mockServer.delete('#', { success: true });
