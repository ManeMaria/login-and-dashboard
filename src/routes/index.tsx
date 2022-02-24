import { Navigate, Route, Routes } from 'react-router';

import { AuthRoute } from './AuthRoute/AuthRoute';

import { MainLayout } from '@/components/MainLayout/MainLayout';
import { Dashboard, Login } from '@/pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
