import { Input } from '@/components/ui/input';
import { registerValidation } from '@/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

type Inputs = {
  name: string;
  login: string;
  email: string;
  password: string;
  check_password: string;
};
type RegisterSchema = z.infer<typeof registerValidation>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerValidation) });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className='flex justify-center h-full overflow-y-auto'>
      <div className='flex flex-col md:flex-row items-center gap-4 '>
        <div className='flex flex-col gap-2 text-center md:text-start py-8'>
          <h1 className='text-5xl text-foreground'>
            Cash<span className='text-primary font-bold'>Flow</span>
          </h1>
          <p className='text-muted-foreground'>
            Empower Your Finances, Command Your Cash Flow.
          </p>
        </div>
        <div className='flex flex-col border-border rounded-sm sm:border-[2px] sm:shadow-sm w-full sm:w-[350px] min-h-[250px] group relative '>
          {/* ANIMATE BORDER */}
          <span className='ease absolute rounded-t-sm left-0 top-0 h-0 w-0 sm:border-t-[2px] border-primary transition-all duration-200 group-hover:w-full'></span>
          <span className='ease absolute rounded-r-sm right-0 top-0 h-0 w-0 sm:border-r-[2px] border-primary transition-all duration-200 group-hover:h-full'></span>
          <span className='ease absolute rounded-b-sm bottom-0 right-0 h-0 w-0 sm:border-b-[2px] border-primary transition-all duration-200 group-hover:w-full'></span>
          <span className='ease absolute rounded-l-sm bottom-0 left-0 h-0 w-0 sm:border-l-[2px] border-primary transition-all duration-200 group-hover:h-full'></span>
          {/* ANIMATE BORDER */}
          <h1 className='p-2 text-lg text-center'>Register</h1>
          <form
            className='flex flex-col justify-between h-[85%]'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex flex-col gap-4 px-12 sm:px-8 pt-4 pb-6 '>
              <div className='relative'>
                <input
                  className='w-full h-10 outline-none focus:border-b-2 focus:border-b-primary mb-[20px]'
                  placeholder='Login..'
                  {...register('login', { required: 'true' })}
                />
                {errors.login && (
                  <span className='text-sm text-destructive block absolute bottom-0'>
                    {errors.login.message}
                  </span>
                )}
              </div>

              <div className='relative'>
                <input
                  className='w-full h-10 outline-none focus:border-b-2 focus:border-b-primary  mb-[20px]'
                  placeholder='Email..'
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className='text-sm text-destructive block absolute bottom-0'>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className='relative'>
                <input
                  className='w-full h-10 outline-none focus:border-b-2 focus:border-b-primary  mb-[20px]'
                  placeholder='Name..'
                  {...register('name', { required: 'true' })}
                />
                {errors.name && (
                  <span className='text-sm text-destructive block absolute bottom-0'>
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className='relative'>
                <input
                  className='w-full h-10 outline-none focus:border-b-2 focus:border-b-primary  mb-[20px]'
                  type='password'
                  placeholder='Password..'
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <span className='text-sm text-destructive block absolute bottom-0'>
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className='relative'>
                <input
                  className='w-full h-10 outline-none focus:border-b-2 focus:border-b-primary  mb-[20px]'
                  type='password'
                  placeholder='Repeat password..'
                  {...register('check_password', { required: true })}
                />
                {errors.check_password && (
                  <span className='text-sm text-destructive block absolute bottom-0'>
                    {errors.check_password.message}
                  </span>
                )}
              </div>
            </div>

            <div className='flex flex-col gap-4 px-12 sm:px-8 pt-4 pb-4'>
              <Input
                className='cursor-pointer h-12 bg-primary rounded-sm text-primary-foreground sm:hover:scale-105 transition-all duration-300 flex justify-center'
                type='submit'
                value='Login'
              />
            </div>
          </form>
          <p className='text-end p-2 text-muted-foreground'>
            Have an account?{' '}
            <Link to='/login' className='underline text-primary'>
              Login!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
