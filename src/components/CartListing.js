import React, { Component } from 'react';
import { formatPrice } from '../js/utilities';
import { CartListingStyle } from './styles/ListingStyles';

class CartListing extends Component {

  remove = (event) => {
    console.log(event.currentTarget.value);
  };

  render() {
    const { name, price, count } = this.props.details;
    return (
        <CartListingStyle> 
          <li key={this.props.index} >
            <h2 className="name">{name}</h2>
            <h2 className="price">{formatPrice(price)}</h2>
            <h2 className="amount">x{count}</h2>
          </li>
        </CartListingStyle>

    );
  }
}

export default CartListing;