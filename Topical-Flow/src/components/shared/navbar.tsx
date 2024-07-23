// Navbar.tsx
import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-2  py-3 flex items-center justify-between">
        {/* Logo on the left edge */}
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-xl">topicalflow</span>
        </a>

        {/* Menu items */}
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="text-gray-700 dark:text-white hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-white hover:text-blue-500 transition duration-300">
            About
          </Link>
          <Link to="/pricing" className="text-gray-700 dark:text-white hover:text-blue-500 transition duration-300">
            Pricing
          </Link>
          <Link to="/how" className="text-gray-700 dark:text-white hover:text-blue-500 transition duration-300">
            How it works
          </Link>
        </div>

        {/* Buttons on the right edge */}
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <button className="flex items-center justify-center gap-10 
            bg-white border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-white 
            hover:text-primary transition duration-300"> Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-3B2385 hover:text-white transition duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button (for smaller screens) */}
        <button className="md:hidden focus:outline-none">
          <svg className="w-6 h-6 text-primary-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
