import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import NavLayout from './nav-layout/NavLayout';
import DashboardLayout from './dashboard-layout/DashboardLayout';
import IncomePage from '../pages/income-page/IncomePage';
import ExpencePage from '../pages/expence-page/ExpencePage';
import BalancePage from '@/pages/balance-page/BalancePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<NavLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<ExpencePage />} />
          <Route path='/dashboard/income' element={<IncomePage />} />
          <Route path='/dashboard/balance' element={<BalancePage />} />
          <Route path='/dashboard/expence' index element={<ExpencePage />} />

          <Route
            path='/dashboard/*'
            element={<Navigate to='/dashboard/expence' />}
          />
        </Route>
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRouter;
