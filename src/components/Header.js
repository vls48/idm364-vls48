import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    isShowing: false
  };
 
  render(){
    return (
       <header className="headerbar">
         <Link to="/admin"><h1>Admin</h1> </Link>
       </header>
    );
  }
}

export default Header;