import React from 'react';
import { Outlet, Navigate } from 'react-router';

import { useAuth } from '@/context/global-provider/Global';

export default function AuthRoute() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/" />;
}
