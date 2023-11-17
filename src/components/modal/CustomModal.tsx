import { ArrowLeft } from 'lucide-react';
import React from 'react';

const CustomModal = ({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  if (isOpen)
    return (
      <div
        onClick={() => setIsOpen(false)}
        className='absolute z-[1000] top-0 left-0 flex justify-center w-full h-full items-center backdrop-blur-lg	'
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='h-full w-full p-4 md:w-1/2 md:pt-4 md:border-border md:border-2  md:rounded-sm lg:w-1/3 md:h-3/4 bg-background overflow-y-scroll'
        >
          <div className='w-full text-start p-2'>
            <ArrowLeft
              onClick={() => setIsOpen(false)}
              className='cursor-pointer md:hidden'
            />
          </div>
          {children}
        </div>
      </div>
    );
};

export default CustomModal;
