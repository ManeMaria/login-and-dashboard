import { USER_INFO_ID, REMEMBER_USER_INFO } from '@/config';
// import { AuthUser } from '@/modules/auth';
export type AuthUser = {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  role?: string;
};
export const storage = {
  getUser: () => JSON.parse(window.localStorage.getItem(`${USER_INFO_ID}`) as string),
  setUser: (user: AuthUser) => window.localStorage.setItem(`${USER_INFO_ID}`, JSON.stringify(user)),
  clearUser: () => window.localStorage.removeItem(`${USER_INFO_ID}`),
  getRememberMe: () => JSON.parse(window.localStorage.getItem(`${REMEMBER_USER_INFO}`) as string),
  setRememberMe: (memory: boolean) =>
    window.localStorage.setItem(`${REMEMBER_USER_INFO}`, JSON.stringify(memory)),
  clearRememberMe: () => window.localStorage.removeItem(`${REMEMBER_USER_INFO}`),
};
