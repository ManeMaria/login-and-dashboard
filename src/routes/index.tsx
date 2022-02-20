import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { Login } from '@/pages';

const AuthRoute = lazy(() => import('@/components/AuthRoute/AuthRoute'));
const DashBoard = () => <h1>DashBoard</h1>;
export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/*" element={<AuthRoutes />} /> */}
      <Route path="/" element={<Login />} />

      <Route element={<AuthRoute />}>
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
