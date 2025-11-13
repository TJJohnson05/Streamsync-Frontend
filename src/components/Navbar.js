import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.svg'; // make sure you have this in /src/assets

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="StreamSync logo" className="navbar-logo" />
        <h1 className="navbar-title">StreamSync</h1>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search streams, games, or users..."
          className="navbar-search"
        />
      </div>

      <div className="navbar-right">
        <a href="/home" className="nav-link">Home</a>
        <a href="/browse" className="nav-link">Browse</a>
        <a href="/profile" className="nav-link">Profile</a>
        <div className="navbar-avatar">👤</div>
      </div>
    </nav>
  );
}

