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

const ListingStyle = styled.div`
  width: 32%;
  margin: 0px 0px 40px 0px; 
  color: white;
  .overlaycont{
    position: relative;
    width: 80%;
    height: 100%;
    display: inline-block;
  }
  button{
    margin: 5px;
  }
  img{
    background-color: red;
    width: 100%;
    float: left;
    display: block;
    overflow: hidden;
    box-shadow: 0px 0px 14px -1px rgba(0,0,0,0.87);
  }
  &:hover .infocont {
    visibility: visible;
    opacity: 1;
  }
  &:hover .gradient {
    visibility: visible;
    opacity: 1;
  }
  .infocont{
    color: white;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    position: absolute;
    bottom: 0;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    h2{
      text-transform: uppercase;
      margin: 0px 0px 0px 10px;
      font-size: 1.5rem;
      font-weight: 700;
    }
    .name{
      margin: 0px 0px 10px 10px;
    }
    .price{
      font-weight: 400;
      font-style: oblique;
      font-size: 0.9rem;
    }
    .status {
      font-size: 0.9rem;
      font-weight: 400;
      text-transform: capitalize;
      color: rgba(255,255,255, 0.75);
    }
    p{
      margin: 15px 10px 15px 10px;
      font-size: 1rem;
      font-weight: 500;
    }
  }
  .gradient{
    background-image: linear-gradient(rgb(255,0,0, 0.2), rgba(0,0,0,0.65), rgba(0,0,0,0.95));
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .buttonscont{
    display: flex;
    width: 80%;
    padding-top: 10px;
    justify-content: center;
  }
`;

export default Listing;