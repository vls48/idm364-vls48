import React, { Component } from 'react';

class Listing extends Component {
  render() {
    const { image, name, desc, status } = this.props.details;
    return (
      <li key="this.props.key" className={status}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{desc}</p>
      </li>
    );
  }
}

export default Listing;