import React, { Component } from 'react';
import { AdminButton } from './styles/ButtonStyles';
import { AdminListingStyle } from './styles/ListingStyles';
import PropTypes from 'prop-types';

class AdminListing extends Component {
  
  handleChange = event => {
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.name);

    const updatedSign = {
      ...this.props.sign,
      // ES6 dynamically get the 'name' attribute of the
      // input element that is being updated.
      // [event.currentTarget.name]
      // Then set the value to whatever is entered in that input:
      [event.currentTarget.name]: event.currentTarget.value
    };

    console.log(updatedSign);
    this.props.updateSign(this.props.index, updatedSign);
  };

  deleteEntry = () => {
    console.log("delete");
    const deletedSign = null;
    this.props.deleteSign(this.props.index, deletedSign);
  }

  render() {
    return (
      <AdminListingStyle className="sign-edit">
        <img src={this.props.sign.image} alt={this.propsname} /> 
        <div className="fields">
          <div className="controlgroup">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={this.props.sign.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="controlgroup">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={this.handleChange}
              value={this.props.sign.status}
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <div className="controlgroup">
            <label htmlFor="price">Price: </label>
            <input
              type="text"
              name="price"
              onChange={this.handleChange}
              value={this.props.sign.price}
            />
          </div>
          <div className="controlgroup">
            <label htmlFor="desc">Description: </label>
            <textarea
              name="desc"
              onChange={this.handleChange}
              value={this.props.sign.desc}
            />
          </div>
          <div className="controlgroup">
            <AdminButton type="button" onClick={this.deleteEntry}> remove listing </AdminButton> 
          </div>
        </div>
      </AdminListingStyle>
    );
  }
}

AdminListing.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  status: PropTypes.string
};

export default AdminListing;