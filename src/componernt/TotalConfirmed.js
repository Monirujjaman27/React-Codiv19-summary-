import React, { Component } from 'react';
class TotalConfirmed extends Component {

    render() { 
        const{global}= this.props;
        return ( 
            <div className="card border-secondary mb-3">
                <div className="card-body text-success">
                <div className="card-header bg-transparent border-success text-center font-weight-bold">Total Confirmed</div>
                    <h5 className="card-title text-center">{global.TotalConfirmed}</h5>
                </div>
            </div>
         );
    }
}
 
export default TotalConfirmed;