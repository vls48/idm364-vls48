import React, { Component } from 'react';
import ListingArea from './ListingArea';
import Sidebar from './Sidebar';

class Main extends Component {
    render(){
        return(
        <React.Fragment>
            <Sidebar />
            <div> <ListingArea /> </div>
        </React.Fragment>
        );
    }
}

export default Main;