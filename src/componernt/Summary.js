import React, { Component } from 'react';
import NewConfirmed from './NewConfirmed';
import NewDeaths from './NewDeaths';
import NewRecovered from './NewRecovered';
import SummaryList from './SummaryList';
import TotalConfirmed from './TotalConfirmed';
import TotalDeaths from './TotalDeaths';
import TotalRecovered from './TotalRecovered';


class Summary extends Component {
    render() { 
        const{global,country,date}= this.props;
        return (
            <div>
                <div className="container">
                    <h1 className="text-center mt-5">Todays Summary | { new Date(date).toDateString()}</h1>
                    <div className="row mt-5 justify-content-center">
                        <div className="col-3">
                            <NewConfirmed global = {global}/>
                        </div>
                        <div className="col-3">
                            <TotalConfirmed global = {global}/>
                        </div>
                        <div className="col-3">
                            <NewDeaths global = {global}/>
                        </div>
                        <div className="col-3">
                            <TotalDeaths global = {global}/>
                        </div>
                        <div className="col-3">
                            <NewRecovered global = {global}/>
                        </div>
                        <div className="col-3">
                            <TotalRecovered global = {global}/>
                        </div>
                    </div> {/* row */}
                    <SummaryList country = {country}/>
                </div>
            </div>
          );
    }
}
 
export default Summary;