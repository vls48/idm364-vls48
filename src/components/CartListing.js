import React, { Component } from 'react';
import { formatPrice } from '../js/utilities';

class CartListing extends Component {

  remove = (event) => {
    console.log(event.currentTarget.value);
  };

  render() {
    const { name, price, count } = this.props.details;
    return (
        <div className="cartlisting"> 
          <li key={this.props.index} >
            <h2>{name}</h2>
            <h2>{formatPrice(price)}</h2>
            <h2>{count}</h2>
            <button type="button" value={this.props.index} onClick={this.remove}> remove</button>
          </li>
        </div>

    );
  }
}

export default CartListing;