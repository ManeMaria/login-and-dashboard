import React, { useState, createContext, useContext } from 'react';

import { IChildrenReact } from '@/types/IChildrenReact';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: IChildrenReact) {
  const [user, setUser] = useState<any | null>(null);
  const signin = (newUser: string, callback: VoidFunction) => {
    setUser(newUser);
    callback();
  };

  const signout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  const value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
