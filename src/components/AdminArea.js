import React, { Component } from 'react';
import AdminListing from './AdminListing';

class AdminArea extends Component {
    render() {
        return ( 
            <React.Fragment>
                <button type="button" onClick={this.props.loadSigns}> reload </button>
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
            </React.Fragment>
        );
    }
}

export default AdminArea;