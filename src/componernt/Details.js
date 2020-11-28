import Axios from 'axios';
import React, { Component } from 'react';
import Summary from './Summary';
class Details extends Component {
    state = {
        global:[],
        country:[],
        date:'',
        loading:true,
    }
    async componentDidMount (){
      const res = await Axios.get("https://api.covid19api.com/summary");
      console.log(res);
      this.setState({
        global:res.data.Global,
        country:res.data.Countries,
        date:res.data.Date,
        loading:false,
      })
    }
    render() { 
        if(this.state.loading){
            return (
                <h1 className="text-center">Loading...</h1>
            )
        }
        return ( 
         <div>
              <Summary global={this.state.global} country={this.state.country} date={this.state.date} />
         </div>
         );
    }
}
 
export default Details;