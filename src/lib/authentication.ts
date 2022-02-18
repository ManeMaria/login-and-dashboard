import jwt_decode from 'jwt-decode';

import { cookies } from '@/utils';

export function useAuth() {
  return !!cookies.getAccess();
}

export function decodeUserData(token: string): void {
  jwt_decode(token);
}
