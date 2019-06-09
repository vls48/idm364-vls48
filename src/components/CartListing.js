import React, { Component } from 'react';
import { formatPrice } from '../js/utilities';
import { AddToCartButton } from './styles/ButtonStyles';

class CartListing extends Component {

  remove = (event) => {
    console.log(event.currentTarget.value);
  };

  addToCart = (price, name, newcount) => {
    const item = {
      price: price,
      name: name,
      count: newcount
    }
    this.props.addSign(this.props.index, item)
  }

  handleClickIncrement = (event) => {
    const price = event.currentTarget.value
    const name = event.currentTarget.name
    const newcount = event.currentTarget.count + 1 
    this.addToCart(price, name, newcount)
    let cost = price * 1
    this.props.setTotal(cost)
  }

  handleClickDecrement = (event) => {
      const price = event.currentTarget.value
      const name = event.currentTarget.name
      const newcount = event.currentTarget.count - 1 
      this.addToCart(price, name, newcount)
      let cost = price * -1
      this.props.setTotal(cost)
  }

  render() {
    const { name, price, count } = this.props.details;
    return (
        <div className="cartlisting"> 
          <li key={this.props.index} >
            <h2>{name}</h2>
            <h2>{formatPrice(price)}</h2>
            <h2>{count}</h2>
            <AddToCartButton type="button" value={price} name={name} count={count} onClick={this.handleClickIncrement}> add to cart</AddToCartButton>
            <AddToCartButton type="button" value={price} name={name} count={count} onClick={this.handleClickDecrement}> remove from cart</AddToCartButton>
          </li>
        </div>

    );
  }
}

export default CartListing;