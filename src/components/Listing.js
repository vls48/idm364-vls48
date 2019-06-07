import React, { Component } from 'react';
import { formatPrice } from '../js/utilities';

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
    return (
      <div className="listing"> 
        <li key="this.props.key" className={status}>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <h3>{status}</h3>
          <p>{formatPrice(price)}</p>
          <p>{desc}</p>
          <button type="button" value={price} name={name} onClick={this.handleClickIncrement}> add to cart</button>
          <button type="button" value={price} name={name} onClick={this.handleClickDecrement}> remove from cart</button>
        </li>
      </div>
    );
  }
}

export default Listing;