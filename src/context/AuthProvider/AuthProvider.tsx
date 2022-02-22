import React, { useState, createContext, useContext } from 'react';

import { IChildrenReact } from '@/types/IChildrenReact';

interface AuthProvider {
  dataUser: any | null;
  token: string | null;
}

interface AuthContextType {
  user: AuthProvider;
  signin: (values: AuthProvider, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: IChildrenReact) {
  const [user, setUser] = useState<AuthProvider>({
    dataUser: null,
    token: null,
  });

  const signin = (values: AuthProvider, callback: VoidFunction) => {
    setUser(values);
    callback();
  };

  const signout = (callback: VoidFunction) => {
    setUser({
      dataUser: null,
      token: null,
    });
    callback();
  };

  const value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
