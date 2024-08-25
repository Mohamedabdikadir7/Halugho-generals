import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="bg-white-200 text-blue sticky top-0 w-full">
      <div className="container flex items-center justify-between py-2 px-4 md:px-6">
        <Link to="/" className="font-bold text-xl">
          Halugo Store
        </Link>
        <div className="relative flex-1 max-w-md mx-4">
          <input
            type="search"
            placeholder="Search products..."
            className="w-full rounded-md bg-gray-200 pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
        </div>
        <div className="flex items-center gap-4">
          {/* Shopping Cart Button */}
          <button className="flex items-center gap-2 rounded-full px-3 py-1 border border-transparent bg-blue-500 text-white hover:bg-blue-700">
            <ShoppingCartIcon className="w-6 h-6 text-white" />
            <span className="sr-only">Shopping Cart</span>
          </button>
          {/* Login Link */}
          <Link to="/login" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
            <LoginIcon className="w-6 h-6 text-blue-600" />
            <span className="sr-only">Login</span>
          </Link>
        </div>
      </div>
      <nav className="bg-gray-100 text-gray-800">
        <div className="container flex items-center justify-center py-3 px-4 md:px-6 space-x-6">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/electronics"
                className="hover:text-blue-500 hover:bg-gray-100/20 px-2 py-1 rounded-md text-gray-800"
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link
                to="/appliances"
                className="hover:text-blue-500 hover:bg-gray-100/20 px-2 py-1 rounded-md text-gray-800"
              >
                Appliances
              </Link>
            </li>
            <li>
              <Link
                to="/phones"
                className="hover:text-blue-500 hover:bg-gray-100/20 px-2 py-1 rounded-md text-gray-800"
              >
                Phones
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 hover:bg-gray-100/20 px-2 py-1 rounded-md text-gray-800"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

// Inline SVGs for icons

function LoginIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
    >
      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

export default Nav;
