import React, { useState, createContext, useContext } from 'react';

import { IChildrenReact } from '@/types/IChildrenReact';

interface AuthProvider {
  dataUser: any | null;
  token: string | null;
}

interface AuthContextType {
  user: AuthProvider;
  setUser: React.Dispatch<React.SetStateAction<AuthProvider>>;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: IChildrenReact) {
  const [user, setUser] = useState<AuthProvider>({
    dataUser: null,
    token: null,
  });

  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
