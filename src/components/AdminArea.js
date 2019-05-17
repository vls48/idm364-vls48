import React, { Component } from 'react';
import AdminListing from './AdminListing';

class AdminArea extends Component {
    render() {
        return ( 
            <ul>
                {Object.keys(this.props.signs).map(key => (
                    <AdminListing 
                        key={key} 
                        index={key} 
                        sign={this.props.signs[key]}
                        updateSign={this.props.updateSign}
                        removeSign={this.props.removeSign}
                    />
                ))}
            </ul>
        );
      }
}

export default AdminArea;