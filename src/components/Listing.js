import React, { Component } from 'react';

class Listing extends Component {

  addToCart = (event) => {
    console.log(event.currentTarget.value);
    this.props.add(event.currentTarget.value)
  };

  render() {
    const { image, name, desc, status } = this.props.details;
    return (
      <div className="listing"> 
        <li key="this.props.key" className={status}>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <h3>{status}</h3>
          <p>{desc}</p>
          <button type="button" value={this.props.index} onClick={this.addToCart}> add to cart</button>
        </li>
      </div>
    );
  }
}

export default Listing;