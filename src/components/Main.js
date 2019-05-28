import React, { Component } from 'react';
import Listing from './Listing';
import Sidebar from './Sidebar';

class Main extends Component {

    render(){
        return(
        <React.Fragment>
            <Sidebar />
            <div className="listingArea"> 
                <ul className="signs">
                    {Object.keys(this.props.signs).map(key => (
                        <Listing 
                            key={key}
                            details={this.props.signs[key]} 
                        />
                    ))}
                </ul>
            </div>
        </React.Fragment>
        );
    }
}

export default Main;