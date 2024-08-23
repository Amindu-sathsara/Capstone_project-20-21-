import React from 'react';
import './NavBar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Healthcare App</h1>
      <ul className="nav-links">
        <li id='text'><a href="/">Home</a></li>
        <li id='text'><a href="/about">About</a></li>
        <li id='text'><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;