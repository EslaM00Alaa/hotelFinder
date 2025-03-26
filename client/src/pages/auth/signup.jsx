import React from 'react';
import bg from '../../../public/images/background.jpg';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content (placed above the overlay) */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
       <div className='w-full lg:w-4/12 h-fit bg-white/60 rounded-2xl text-center '>
          <h2 className='text-[#212121] mt-12 text-2xl lg:text-3xl font-bold mb-4'>
            Sign Up or Login 
          </h2>
          <p className='text-xl text-gray-900 font-semibold mb-12'>Welcome back ! Please enter Your details.</p>
          <input type="text" className=' w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4'placeholder='Enter Name' />
          <input type="text" className=' w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4'placeholder='Phone ' />
           <input type="text" className=' w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4'placeholder='Email address' />
           <input type="password" className=' w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4'placeholder='Password' />
           <input type="password" className=' w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4'placeholder='Confirm' />
           <button className='block w-10/12 text-center mx-auto text-2xl p-3 bg-[#212121] mb-4'>
            Sign Up
           </button>

           <div className='w-10/12 mb-12 mx-auto flex justify-end items-center'>
           <Link className="text-xl text-[#212121]" to="/login">
           You Have Account Before ?
            </Link>
         
           </div>
    
    
       </div>
      </div>
    </div>
  );
};

export default SignUp;
