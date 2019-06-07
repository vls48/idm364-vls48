import React, { Component } from 'react';
import CartArea from './CartArea';

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <h4>ANDRE THE GIANT HAS A POSSE</h4>
        <CartArea 
          list={this.props.list}
          total={this.props.total}
        />
      </div>
    );
  }
}

export default Sidebar;