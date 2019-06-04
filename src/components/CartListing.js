import React, { Component } from 'react';

class CartListing extends Component {

  remove = (event) => {
    console.log(event.currentTarget.value);
  };

  render() {
    const { image, name, desc, status } = this.props.details;
    return (
      <div className="cartlisting"> 
        <li key={this.props.index} className={status}>
          <h2>{name}</h2>
          <button type="button" value={this.props.index} onClick={this.remove}> remove</button>
        </li>
      </div>
    );
  }
}

export default CartListing;