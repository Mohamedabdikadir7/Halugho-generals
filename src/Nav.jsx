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
            className="w-full rounded-md bg-white-100/20 pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-full px-3 py-1 border border-transparent bg-blue-500 text-white hover:bg-blue-700">
            <span className="text-xs font-medium">24/7</span>
            <LoginIcon className="w-5 h-5" />
            <span className="sr-only">Need Help</span>
          </button>
          <button className="flex items-center gap-2 rounded-full px-3 py-1 border border-transparent bg-blue-500 text-white hover:bg-blue-700">
            <ShoppingCartIcon className="w-5 h-5" />
            <span className="sr-only">Shopping Cart</span>
          </button>
          <Link to="/login" className="flex items-center gap-2 text-white hover:text-blue-200">
            <LoginIcon className="w-5 h-5" />
            <span className="sr-only">Login</span>
          </Link>
          <Link to="/register" className="flex items-center gap-2 text-white hover:text-blue-200">
            <RegisterIcon className="w-5 h-5" />
            <span className="sr-only">Register</span>
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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 12h6M15 12l4-4M15 12l4 4M2 12v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1" />
    </svg>
  );
}

function RegisterIcon(props) {
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
      <path d="M14 2h6a2 2 0 0 1 2 2v6M6 2H2a2 2 0 0 0-2 2v6M6 22H2a2 2 0 0 1-2-2v-6M22 2v6a2 2 0 0 1-2 2h-6M12 22v-6M12 22H6a2 2 0 0 1-2-2v-6M22 22v-6a2 2 0 0 0-2-2h-6" />
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