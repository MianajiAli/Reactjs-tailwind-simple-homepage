import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-5'>
          <span className='md:text-4xl sm:text-3xl text-xl font-bold'>Want tips & tricks to optimize your flow?</span>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between '>
            <input className='p-3 flex w-full rounded-md text-black ' type="email" placeholder='Enter Email' />
            <button className=' bg-green-400 w-[200px] rounded-md font-semibold  text-black py-3 sm:ml-4 mx-auto my-5'> Notify Me</button>
          </div>
          <p>
          We care bout the protection of your data. Read our{' '}
          </p>
            <span className='text-[#00df9a]'>Privacy Policy.</span>
        </div>
      </div>

    </div>
  );
};

export default Newsletter;