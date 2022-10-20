//create navbar
import React from 'react';
import Typed from 'react-typed';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 text-white max-w-5xl mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-green-400">R6Play.</h1>
      <ul className="flex">
        <a
          href="/"
          className="p-4 border-b-1 border-transparent text-white hover:underline decoration-4 decoration-green-500 underline-offset-8">
          Home
        </a>
        <a
          href="/about"
          className="p-4 border-b-1 border-transparent text-white hover:underline decoration-4 decoration-green-500 underline-offset-8">
          About
        </a>
        <a
          href="/contact"
          className="p-4 border-b-1 border-transparent text-white hover:underline decoration-4 decoration-green-500 underline-offset-8">
          Contact
        </a>
      </ul>
      <ul className="inline-flex items-center">
        <li className="ml-5 bg-transparent hover:bg-green-500 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          Login
        </li>
        <li className="ml-5 bg-transparent hover:bg-green-500 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          Register
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
