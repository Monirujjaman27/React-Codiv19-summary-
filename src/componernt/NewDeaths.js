import React, { Component } from 'react';
class NewDeaths extends Component {

    render() { 
        const{global}= this.props;
        return ( 
            <div className="card border-info mb-3">
                <div className="card-body text-success">
                <div className="card-header bg-transparent border-success text-center font-weight-bold">New Deaths</div>
                    <h3 className="card-title text-center">{global.NewDeaths}</h3>
                </div>
            </div>
         );
    }
}
 
export default NewDeaths;