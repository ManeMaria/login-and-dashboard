import React, { useState, createContext, useContext } from 'react';

import { IChildrenReact } from '@/types/types';

export const GlobalContext = createContext({});

export function AuthProvider({ children }: IChildrenReact) {
  const [useData, setUserData] = useState<any | null>();

  return (
    <GlobalContext.Provider value={{ useData, setUserData }}>{children}</GlobalContext.Provider>
  );
}

export const useAuth = () => useContext(GlobalContext);
