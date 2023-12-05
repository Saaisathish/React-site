import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ scrollToHome, scrollToAbout, scrollToProjects, scrollToSkills, scrolltoContact }) {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname
      ? 'text-white font-bold border-b-2 border-white'
      : 'text-gray-300 hover:text-white hover:border-white transition duration-300';
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" onClick={scrollToHome} className="text-white text-2xl font-bold">
         Saaisathish Sankarabhattar Ayyappan
        </Link>
        <ul className="flex">
          <li className="ml-6">
            <Link to="/" onClick={scrollToHome} className={isActive('/')}>
              Home
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/about" onClick={scrollToAbout} className={isActive('/about')}>
              About
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/projects" onClick={scrollToProjects} className={isActive('/projects')}>
              Projects
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/skills" onClick={scrollToSkills} className={isActive('/skills')}>
              Skills
            </Link>
            </li>
            <li className="ml-6">
            <Link to="/contact" onClick={scrolltoContact} className={isActive('/contact')}>
              Contact
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
