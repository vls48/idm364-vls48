import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './styles/HeaderStyles';

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
      <>
        <HeaderStyled fullheight={this.state.isShowing ? '' : 'fullheight'} className="headerbar">
          <Link to={this.state.isShowing ? '/' : '/admin'} onClick={this.handleClick}><h1>Admin {this.state.isShowing ? '▲' : '▼'}</h1> </Link>
        </HeaderStyled>
        <div className="box"></div>
       </>
    );
  }
}

export default Header;