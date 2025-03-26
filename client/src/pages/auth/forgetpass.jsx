import React from 'react';
import bg from '../../../public/images/background.jpg';
import { Link } from 'react-router-dom';

const Forget = () => {
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
          <h2 className='text-[#212121] my-12 text-2xl lg:text-3xl font-bold mb-8'>
           Enter Email To Your Account
          </h2>
           
           <input type="text" className=' w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4'placeholder='Email address' />
           <button className='block w-10/12 text-center mx-auto text-2xl p-3 bg-[#212121] mb-12'>
            Send Code
           </button>

           
    
    
       </div>
      </div>
    </div>
  );
};

export default Forget;
