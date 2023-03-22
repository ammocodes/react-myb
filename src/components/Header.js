import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <h1>MyBartenders</h1>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Search bar */}
      <div className="search-bar">
        <input type="search" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
