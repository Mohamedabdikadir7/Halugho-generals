import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container relative grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 md:px-6 z-10">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Elevate Your Tech Experience
          </h1>
          <p className="text-white text-lg md:text-xl">
            Discover the latest cutting-edge electronics at our premier shop. From sleek smartphones to powerful
            laptops, we have everything you need to enhance your digital lifestyle.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              to="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-300 disabled:pointer-events-none disabled:opacity-50"
            >
              Shop Now
            </Link>
            <Link
              to="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-300 disabled:pointer-events-none disabled:opacity-50"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 hidden lg:block">
          <div className="w-full h-full rounded-xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/pexels-tuurt-812264.jpg)' }}></div>
        </div>
      </div>
    </section>
  );
}
