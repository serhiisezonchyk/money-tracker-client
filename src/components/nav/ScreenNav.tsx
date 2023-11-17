import React from 'react';
import { Link } from 'react-router-dom';

const ScreenNav = () => {
  return (
    <div className='hidden sm:flex flex-row justify-between w-full'>
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default ScreenNav;
