import jwt_decode from 'jwt-decode';

export function decodeUserData(token: string): string {
  return jwt_decode(token);
}
