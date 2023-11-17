import { Menu } from 'lucide-react';
import React from 'react';
import { Link, useResolvedPath } from 'react-router-dom';

const MobileNav = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      <div className='sm:hidden flex flex-row justify-between w-full'>
        <Link to='/'>Home</Link>
        <Menu className='cursor-pointer relative z-50' onClick={toggleOpen} />
      </div>
      {open && (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
          <div className='absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8'>
            <Link to='/dashboard' onClick={toggleOpen} className='py-2'>
              Dashboard
            </Link>
            <Link to='/login' onClick={toggleOpen} className='py-2'>
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
