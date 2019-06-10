import React, { Component } from 'react';
import { formatPrice } from '../js/utilities';
import { AddToCartButton } from './styles/ButtonStyles';
import { ListingStyle } from './styles/ListingStyles';

class Listing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0 
    };

    this.handleClickIncrement = this.handleClickIncrement.bind(this);
    this.handleClickDecrement = this.handleClickDecrement.bind(this);
  }

  addToCart = (price, name) => {
    const item = {
      price: price,
      name: name,
      count: this.state.count
    }
    this.props.addSign(this.props.index, item)
  }

  handleClickIncrement = (event) => {
    if ( this.props.details.status != "Out of Stock") {
      const price = event.currentTarget.value
      const name = event.currentTarget.name
      this.setState({count: this.state.count + 1 }, () => this.addToCart(price, name));
      let cost = price * 1
      this.props.setTotal(cost)
    }
  }

  handleClickDecrement = (event) => {
    if (this.state.count > 0 && this.props.details.status != "Out of Stock") {
      const price = event.currentTarget.value
      const name = event.currentTarget.name
      this.setState({count: this.state.count - 1 }, () => this.addToCart(price, name));
      let cost = price * -1
      this.props.setTotal(cost)
    }
  }

  render() {
    const { image, name, price, status, desc } = this.props.details;
    console.log(image)
    let removeFromCart;
    if (this.state.count > 0) {
      removeFromCart = <AddToCartButton type="button" value={price} name={name} onClick={this.handleClickDecrement}> REMOVE </AddToCartButton>;
    } else {
      removeFromCart = <div></div>;
    }
    return (
      <ListingStyle className="listing"> 
        <li key="this.props.key" className={status}>
          <div className="overlaycont">
            <img src={image} alt={name} /> 
            <div className="gradient"></div>
            <div className="infocont">
              <h2 className="name">{name}</h2>
              <h2 className="price">{formatPrice(price)}</h2>
              <h2 className="status">{status}</h2>
              <p>{desc}</p>  
            </div>
          </div>
          <div className="buttonscont"><AddToCartButton white type="button" value={price} name={name} onClick={this.handleClickIncrement}> ADD TO CART</AddToCartButton> {removeFromCart} </div>
        </li>
      </ListingStyle>
    );
  }
}

export default Listing;