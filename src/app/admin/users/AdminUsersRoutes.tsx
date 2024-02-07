import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { ErrorPage } from '@/components/ErrorPage';
import { PageUserCreate } from '@/app/admin/users/PageUserCreate';
import { PageUserUpdate } from '@/app/admin/users/PageUserUpdate';
import { PageUsers } from '@/app/admin/users/PageUsers';

const AdminUsersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageUsers />} />
      <Route path="create" element={<PageUserCreate />} />
      <Route path=":login" element={<PageUserUpdate />} />
      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  );
};

export default AdminUsersRoutes;
