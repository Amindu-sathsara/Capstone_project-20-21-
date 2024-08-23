import React from 'react';
import './Navbar.css'; // Create a CSS file for your navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Healthcare App</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;