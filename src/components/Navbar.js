import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="https://resume.creddle.io/resume/14mulmr5kh6" target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

