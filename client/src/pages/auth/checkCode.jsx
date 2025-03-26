import React from 'react';
import bg from '../../../public/images/background.jpg';

const CheckCode = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content (placed above the overlay) */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="w-full lg:w-4/12 h-fit bg-white/60 rounded-2xl text-center p-8">
          <h2 className="text-[#212121] text-2xl lg:text-3xl font-bold mb-6">
            Enter Verification Code
          </h2>

          <input 
            type="text" 
            className="w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4 border border-gray-300 rounded-lg"
            placeholder="Enter your code" 
          />

          <button className="block w-10/12 text-center mx-auto text-2xl p-3 bg-[#212121] text-white rounded-lg hover:bg-gray-900 transition duration-300 mb-6">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckCode;
