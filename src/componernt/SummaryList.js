import React, { Component } from 'react';
class SummaryList extends Component {

    render() { 
        const{country}= this.props;
        return ( 
            <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                        <table className="table table-striped table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Countrys</th>
                                    <th scope="col">New Confirmed</th>
                                    <th scope="col">Total Confirmed</th>
                                    <th scope="col">New Dath</th>
                                    <th scope="col">Total Dath</th>
                                    <th scope="col">New Recovered</th>
                                    <th scope="col">Total Recovered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {country.map(Country =>(
                                <tr index="Country">
                                    <td>{Country.Country}</td>
                                    <td>{Country.NewConfirmed}</td>
                                    <td>{Country.TotalConfirmed}</td>
                                    <td>{Country.NewDeaths}</td>
                                    <td>{Country.TotalDeaths}</td>
                                    <td>{Country.NewRecovered}</td>
                                    <td>{Country.TotalRecovered}</td>
                                </tr>
                                ))}

                            </tbody>
                            </table>
                        </div>
                    </div>
         );
    }
}
 
export default SummaryList;