import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    isShowing: false
  };

  /*componentDidMount {
    do stuff in case the admin is the first view/is typed in to address
  }*/
 
  handleClick = () => {
    this.setState({
      isShowing: !this.state.isShowing
    });
  } 
  render(){
    return (
       <header className="headerbar">
         <Link to={this.state.isShowing ? '/' : '/admin'} onClick={this.handleClick}><h1>Admin {this.state.isShowing ? '▲' : '▼'}</h1> </Link>
       </header>
    );
  }
}

export default Header;