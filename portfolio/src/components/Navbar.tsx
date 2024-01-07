import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-50">
      <ul className="flex justify-around text-white text-lg">
        <li className="hover:text-gray-300">
          <Link to="Home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="Projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="Skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="Education" smooth={true} duration={500}>Education</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="Contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
