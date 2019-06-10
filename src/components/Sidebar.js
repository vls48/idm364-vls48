import React, { Component } from 'react';
import CartArea from './CartArea';
import SidebarStyled from './styles/SidebarStyles';

class Sidebar extends Component {

  render() {
    return (
      <SidebarStyled>
        <h4>ANDRE THE GIANT HAS A POSSE</h4>
        <CartArea 
          list={this.props.list}
          total={this.props.total}
          addSign={this.props.addSign}
          setTotal={this.props.setTotal}
        />
      </SidebarStyled>
    );
  }
}

export default Sidebar;