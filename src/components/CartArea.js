import React, { Component } from 'react';
import CartListing from './CartListing';
import { formatPrice } from '../js/utilities';

class CartArea extends Component {

    totalPrice = (sum) => {
        console.log(sum)
        //const currentTotal = { ...this.state.total };

        //currentTotal = currentTotal + sum;
        //this.setState({total: currentTotal });
        //this.setState({total: this.state.total + sum });
    }
    
    render() {
        return ( 
            <React.Fragment>
                <ul>
                    {Object.keys(this.props.list).map(key => {
                        if (this.props.list[key].count > 0 ) {

                            const sum = this.props.list[key].count * this.props.list[key].price;
                            console.log(sum)
                            this.totalPrice(sum)
                            return(
                            <CartListing 
                                key={key} 
                                index={key} 
                                details={this.props.list[key]}
                                addSign={this.props.addSign}
                                setTotal={this.props.setTotal}
                            />
                            );
                        } else {
                            return(console.log("no listings"));
                        }
                    })}
                </ul>
                <div>
                    <h2>Order Total: {formatPrice(this.props.total)}</h2>
                </div>
            </React.Fragment>
        );
    }
}

export default CartArea;