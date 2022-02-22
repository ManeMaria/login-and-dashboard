import jwt_decode from 'jwt-decode';

import { cookies, storage } from '@/utils';
import { session } from '@/utils/session';

function decodeUserData(token: string): string {
  return jwt_decode(token);
}

function logoutFn(callback: VoidFunction) {
  storage.clearUser();
  cookies.clearAccess();
  callback();
}

function loadAccess(): boolean {
  const user = storage.getUser() || session.getUser();
  const access = cookies.getAccess();

  if (!user || !access) {
    console.log('caiu');
    storage.clearUser();
    cookies.clearAccess();
    return false;
  }

  return true;
}

export { loadAccess, logoutFn, decodeUserData };
