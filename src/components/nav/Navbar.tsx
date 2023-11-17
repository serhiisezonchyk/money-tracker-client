import React from 'react';
import MobileNav from './MobileNav';
import ScreenNav from './ScreenNav';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex items-center h-full bg-background text-foreground dark:bg-background dark:text-foreground px-2 sm:px-4 md:px-6'>
      <MobileNav />
      <ScreenNav />
    </nav>
  );
};

export default Navbar;
