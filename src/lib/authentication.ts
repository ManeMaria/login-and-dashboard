import jwt_decode from 'jwt-decode';

import { cookies, storage } from '@/utils';

function decodeUserData(token: string): string {
  return jwt_decode(token);
}

function logoutFn(callback: VoidFunction) {
  storage.clearUser();
  cookies.clearAccess();
  callback();
}

function loadAccess(): boolean {
  const user = storage.getUser();
  const access = cookies.getAccess();
  const doYouRememberMe = storage.getRememberMe();
  console.log(!access);
  console.log(!user);
  console.log('!if', !doYouRememberMe && (!user || !access));
  if (!doYouRememberMe && (!user || !access)) {
    console.log('caiu');
    storage.clearUser();
    cookies.clearAccess();
    return false;
  } else {
    console.log('caiu passou');
    return true;
  }
}

export { loadAccess, logoutFn, decodeUserData };
