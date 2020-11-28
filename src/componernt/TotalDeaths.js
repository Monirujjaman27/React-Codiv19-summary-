import React, { Component } from 'react';
class TotalDeaths extends Component {

    render() { 
        const{global}= this.props;
        return ( 
            <div className="card border-danger mb-3">
                <div className="card-body text-success">
                <div className="card-header bg-transparent border-success text-center font-weight-bold">Total Deaths</div>
                    <h5 className="card-title text-center">{global.TotalDeaths}</h5>
                </div>
            </div>
         );
        }
}
 
export default TotalDeaths;