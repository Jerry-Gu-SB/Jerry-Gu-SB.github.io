import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-50">
      <ul className="flex justify-around text-white text-lg">
        <li className="hover:text-gray-300">
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
