import { Navigate, Route, Routes } from 'react-router';

import { MainLayout } from '@/components/MainLayout/MainLayout';
import ProtectRoutes from '@/components/ProtectRoutes/ProtectRoutes';
import { loadAccess } from '@/lib/authentication';
import { Dashboard } from '@/pages/Dashboard/Dashboard';
import { Login } from '@/pages/Login/Login';

export const AppRoutes = () => {
  const hasAcess = loadAccess();

  return (
    <Routes>
      <Route path="/" element={hasAcess ? <Navigate to="dashboard" /> : <Login />} />
      <Route path="login" element={<Login />} />

      <Route element={<ProtectRoutes />}>
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
