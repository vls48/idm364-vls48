import React, { Component } from 'react';
import CartListing from './CartListing';
import { formatPrice } from '../js/utilities';
import styled from 'styled-components';

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
                <ul style={{padding: 0}}>
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
                <CartTotalStyled>
                    <h2>Cart Total:</h2> <h2 className="cost"> {formatPrice(this.props.total)}</h2>
                </CartTotalStyled>
            </React.Fragment>
        );
    }
}

const CartTotalStyled = styled.div`
{
    border-top: 0.2px solid red;
    background-color: rgba(0, 0, 0, 0.5);
    height: 90px;
    width: 22%;
    right: 0;
    bottom: 0;
    text-align: right;
    position: fixed;
    h2 {
        display: inline-block;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-family: 'Roboto',sans-serif;
        font-weight: 700;
        padding-right: 10px;
        color: rgba(255,255,255,0.8);
    }
    .cost{
        color: white;
        font-style: oblique;
    }
}
`;
export default CartArea;