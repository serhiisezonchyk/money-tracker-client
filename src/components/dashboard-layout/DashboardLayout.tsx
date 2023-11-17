import { TrendingDown, TrendingUp, UserCircle, Wallet2 } from 'lucide-react';
import React, { forwardRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import DatePickerComponent from '../date-picker/DatePickerComponent';
interface ExampleCustomInputProps {
  value: string;
  onClick: () => void;
}
const DashboardLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className='flex flex-col md:flex-row md:h-full'>
      <div
        className='flex flex-row gap-4 justify-between text-center h-[30px] w-full sticky top-[60px] bg-background text-foreground
        border-b-border border-b-[1px]
        md:sticky md:top-0 md:h-[99%] md:p-2
        md:border-[1px] md:border-border md:rounded-sm md:mx-2 md:mb-2
        md:justify-start md:flex-col md:w-1/5 '
      >
        <div className='hidden md:flex md:flex-row md:gap-4 md:justify-center md:text-start '>
          <UserCircle className='text-primary h-auto min-w-[30px] w-[40px]' />
          <div>
            <p className='font-bold'>Hi, Serhii</p>
            <p>Your wallet:</p>
          </div>
        </div>
        <Link
          to='/dashboard/income'
          className={`w-full relative flex justify-evenly ${
            pathname === '/dashboard/income' ? 'text-primary' : ''
          }`}
        >
          <TrendingUp />
          Incomes
          <span
            className={`ease absolute bottom-0 left-0 h-0 w-0 border-b-[2px] border-primary transition-all duration-200 ${
              pathname === '/dashboard/income' ? 'w-full' : ''
            } md:hidden`}
          ></span>
        </Link>
        <Link
          to='/dashboard/balance'
          className={`w-full relative flex justify-evenly ${
            pathname === '/dashboard/balance' ? 'text-primary' : ''
          }`}
        >
          <Wallet2 />
          Balance
          <span
            className={`ease absolute bottom-0 left-0 h-0 w-0 border-b-[2px] border-primary transition-all duration-200 ${
              pathname === '/dashboard/balance' ? 'w-full' : ''
            } md:hidden`}
          ></span>
        </Link>
        <Link
          to='/dashboard/expence'
          className={`w-full relative flex justify-evenly ${
            pathname === '/dashboard/expence' ? 'text-primary' : ''
          }`}
        >
          <TrendingDown />
          Expences
          <span
            className={`ease absolute bottom-0 left-0 h-0 w-0 border-b-[2px] border-primary transition-all duration-200 ${
              pathname === '/dashboard/expence' ? 'w-full' : ''
            } md:hidden`}
          ></span>
        </Link>
      </div>
      <div className='md:w-4/5 h-[99%] md:mt-0 md:border-[1px] md:border-border md:rounded-sm md:p-2 md:mr-2 overflow-y-auto'>
        <DatePickerComponent />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
