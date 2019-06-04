import React, { Component } from 'react';
import CartListing from './CartListing';

class CartArea extends Component {
    render() {
        return ( 
                <ul>
                    {Object.keys(this.props.signs).map(key => (
                        <CartListing 
                            key={key} 
                            index={key} 
                            details={this.props.signs[key]}
                        />
                    ))}
                </ul>

        );
    }
}

export default CartArea;