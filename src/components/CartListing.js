import React, { Component } from 'react';

class CartListing extends Component {

  remove = (event) => {
    console.log(event.currentTarget.value);
  };

  render() {
    const { image, name, desc, status } = this.props.details;
    return (
      <div className="cartlisting"> 
        <li key="this.props.key" className={status}>
          <h2>{name}</h2>
          <p>{desc}</p>
          <button type="button" value={this.props.index} onClick={this.remove}> add to cart</button>
        </li>
      </div>
    );
  }
}

export default CartListing;