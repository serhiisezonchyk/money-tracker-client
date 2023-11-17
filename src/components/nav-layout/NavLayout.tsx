import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../nav/Navbar';

const NavLayout = () => {
  return (
    <div className='h-full'>
      <header className='sticky top-0 h-[60px] z-20'>
        <Navbar />
      </header>
      <main className='h-[calc(100vh-60px)] z-0'>
        <Outlet />
      </main>
    </div>
  );
};

export default NavLayout;
