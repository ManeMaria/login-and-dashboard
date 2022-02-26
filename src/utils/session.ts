import { USER_INFO_ID } from '@/config';

export type AuthUser = {
  id?: string;
  name: string;
  avatar: string;
  token: string;
};

export const session = {
  getUser: () => JSON.parse(window.sessionStorage.getItem(`${USER_INFO_ID}`) as string),
  setUser: (user: AuthUser) =>
    window.sessionStorage.setItem(`${USER_INFO_ID}`, JSON.stringify(user)),
};
