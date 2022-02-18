import { lazy } from 'react';

import { useAuth } from '@/lib/authentication';

const ProtectedRoutes = lazy(() => import('./ProtectedRoutes'));
const PublicRoutes = lazy(() => import('./PublicRoutes'));

export const AppRoutes = () => {
  const auth = useAuth();
  return auth ? <ProtectedRoutes /> : <PublicRoutes />;
};
