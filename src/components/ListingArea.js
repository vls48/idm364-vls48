import React, { Component } from 'react';
import Listing from './Listing';

class ListingArea extends Component {
    render() {
        return (       
        <div>
            <ul className="signs">
                {Object.keys(this.props.signs).map(key => (
                    <Listing 
                        key={key}
                        details={this.state.signs[key]} 
                    />
                ))}
            </ul>
        </div>
        
        );
      }
}

export default ListingArea;