import React, { Component } from 'react';
import { formatPrice } from '../js/utilities';
import { AddToCartButton } from './styles/ButtonStyles';
import styled from 'styled-components';

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
    const price = event.currentTarget.value
    const name = event.currentTarget.name
    this.setState({count: this.state.count + 1 }, () => this.addToCart(price, name));
    let cost = price * 1
    this.props.setTotal(cost)
  }

  handleClickDecrement = (event) => {
    if (this.state.count > 0) {
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
      removeFromCart = <AddToCartButton type="button" value={price} name={name} onClick={this.handleClickDecrement}> Remove from Cart</AddToCartButton>;
    } else {
      removeFromCart = <div></div>;
    }
    return (
      <ListingStyle className="listing"> 
        <li key="this.props.key" className={status}>
          <img src={image} alt={name} />
          <AddToCartButton type="button" value={price} name={name} onClick={this.handleClickIncrement}> Add to Cart</AddToCartButton> {removeFromCart}
          <h2>{name} {status}</h2>
          <p>{formatPrice(price)}</p>
          <p>{desc}</p>
        </li>
      </ListingStyle>
    );
  }
}

const ListingStyle = styled.div`
  width: 32%;
  margin: 5px;
  color: white;
  li{
    position: realitve;
  }
  li h2{
    text-transform: uppercase;
    margin: 5px 5px 5px 0px;
    font-size: 1.3rem;
  }
  p {
    color: white;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }
  button{
    margin: 5px;
  }
  img{
    background-color: red;
    margin: 15px 15px 15px 0px;
    width: 77%;
    float: left;
    display: block;
    overflow: hidden;
    box-shadow: 0px 0px 14px -1px rgba(0,0,0,0.87);
  }
  &:hover p {
    visibility: visible;
    opacity: 1;
  }
`;

export default Listing;