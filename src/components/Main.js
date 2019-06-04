import React, { Component } from 'react';
import Listing from './Listing';
import Sidebar from './Sidebar';

class Main extends Component {

    add = (key) => {   
            console.log({key});
    };

    render(){
        return(
        <React.Fragment>
            <Sidebar 
                signs={this.props.signs}
            />
            <div className="listingArea"> 
                <ul className="signs">
                    {Object.keys(this.props.signs).map(key => (
                        <Listing 
                            key={key}
                            index={key}
                            add={this.add} 
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