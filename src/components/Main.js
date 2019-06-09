import React, { Component } from 'react';
import Listing from './Listing';
import Sidebar from './Sidebar';

class Main extends Component {

    render(){
        return(
        <React.Fragment>
            <Sidebar 
                list={this.props.list}
                total={this.props.total}
                addSign={this.props.addSign}
                setTotal={this.props.setTotal}
            />
            <div className="listingArea"> 
                <ul className="signs">
                    {Object.keys(this.props.signs).map(key => (
                        <Listing 
                            key={key}
                            index={key}
                            details={this.props.signs[key]}
                            addSign={this.props.addSign}
                            setTotal={this.props.setTotal}
                        />
                    ))}
                </ul>
            </div>
        </React.Fragment>
        );
    }
}

export default Main;