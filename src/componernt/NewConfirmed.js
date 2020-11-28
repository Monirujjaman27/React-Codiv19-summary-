import React, { Component } from 'react';
class NewConfirmed extends Component {

    render() { 
        const{global}= this.props;
        return ( 
            <div className="card border-warning mb-3">
                <div className="card-body text-success">
                <div className="card-header bg-transparent border-success text-center font-weight-bold">New Confirmed</div>
                    <h5 className="card-title text-center">{global.NewConfirmed}</h5>
                </div>
            </div>
         );
    }
}
 
export default NewConfirmed;