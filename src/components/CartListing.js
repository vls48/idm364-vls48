import React, { Component } from 'react';
import { formatPrice } from '../js/utilities';
import { AddToCartButton } from './styles/ButtonStyles';

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
          </li>
        </div>

    );
  }
}

export default CartListing;