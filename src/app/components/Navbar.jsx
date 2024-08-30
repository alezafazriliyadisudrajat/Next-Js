"use client";

import React, { useState } from 'react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:p-8">
        <a href="/" className="flex items-center">
          <svg 
            className="w-24 h-8"
            viewBox="0 0 100 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle"
              className="text-3xl font-bold fill-current text-white" // Sesuaikan warna dengan teks navigasi
            >
              ZA
            </text>
          </svg>
        </a>
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg 
              className="w-6 h-6"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg 
              className="w-6 h-6"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <div className={`menu ${isMenuOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index} className="mb-4 md:mb-0">
                <NavLink href={link.path} title={link.title} onClick={toggleMenu} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMenuOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
