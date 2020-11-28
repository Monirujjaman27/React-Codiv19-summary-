import React, { Component } from 'react';
class TotalRecovered extends Component {
    render() { 
        const{global}= this.props;
        return ( 
            <div className="card border-success mb-3">
                <div className="card-body text-success">
                <div className="card-header bg-transparent border-success text-center font-weight-bold">Total Recovered</div>
                    <h3 className="card-title text-center">{global.TotalRecovered}</h3>
                </div>
            </div>
         );
    }
}
 
export default TotalRecovered;