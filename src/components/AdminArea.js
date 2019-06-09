import React, { Component } from 'react';
import AdminListing from './AdminListing';
import { ResetButton } from './styles/ButtonStyles';

class AdminArea extends Component {
    render() {
        return ( 
            <React.Fragment>
                <h1 className="adminTitle">The Control Panel</h1>
                <ResetButton type="button" onClick={this.props.loadSigns}> Reload </ResetButton>
                <ul>
                    {Object.keys(this.props.signs).map(key => (
                        <AdminListing 
                            key={key} 
                            index={key} 
                            sign={this.props.signs[key]}
                            updateSign={this.props.updateSign}
                            deleteSign={this.props.deleteSign}
                        />
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default AdminArea;