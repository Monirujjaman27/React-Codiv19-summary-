import React, { Component } from 'react';
class NewRecovered extends Component {
   
    render() { 
        const{global}= this.props;
        return ( 
            <div className="card border-success mb-3">
                <div className="card-body text-success">
                <div className="card-header bg-transparent border-success text-center font-weight-bold">New Recovered</div>
                    <h5 className="card-title text-center">{global.NewRecovered}</h5>
                </div>
            </div>
         );
        }
}
 
export default NewRecovered;