import { Navigate, Outlet } from 'react-router';

import { loadAccess } from '@/lib/authentication';

export default function ProtectRoutes() {
  const hasAcess = loadAccess();

  return hasAcess ? <Outlet /> : <Navigate to="login" />;
}
