import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

function Navbar() {
  const navStyle = {
    padding: '10px',
    backgroundColor: '#eee',
    display: 'flex',
    gap: '10px',
    width: '100%',
    height : '5%'
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/form">Form</Link>
      <Link to="formAdmins">Add admin</Link>
    </nav>
  );
}

export default Navbar;