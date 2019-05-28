import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
 
  <header className="headerbar">
     <Link to="/admin"><h1>Admin</h1> </Link>
  </header>
);

export default Header;