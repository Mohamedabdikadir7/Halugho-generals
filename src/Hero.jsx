import React from 'react';

function Hero() {
  return (
    <section className='flex flex-col items-center justify-center min-h-[80vh] bg-white-500 text-white text-center px-6 py-12'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Halugho</h1>
      <p className='text-xl mb-6'>Your journey to success starts here. Learn, grow, and achieve with our tailored services.</p>
      <a href='#contact' className='bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition'>
        Get Started
      </a>
    </section>
  );
}

export default Hero;
