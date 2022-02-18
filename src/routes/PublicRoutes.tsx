import { Route, Routes } from 'react-router-dom';

import { Login } from '@/Pages/Login';
// import { AuthRoutes } from '@/modules/auth';
// import { Landing } from '@/modules/misc';

export default function PublicRoutes() {
  return (
    <Routes>
      {/* <Route path="/*" element={<AuthRoutes />} /> */}
      <Route index element={<Login />} />
    </Routes>
  );
}
