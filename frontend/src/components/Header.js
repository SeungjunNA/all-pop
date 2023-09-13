import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="wrapper-header">
      <Link className="header-logo" to="/">
        ALPOP
      </Link>

      <Link className="header-menu" to="/">
        Home
      </Link>

      <Link className="header-menu" to="/map">
        Map
      </Link>

      <Link className="header-menu" to="/login">
        Login
      </Link>
    </div>
  );
}

export default Header;