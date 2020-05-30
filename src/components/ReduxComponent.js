import React,{Component} from "react";
import {connect} from "react-redux";
import {CHANGE_AIRLINE, CHANGE_DESTINATION} from "../redux/reducers";

class ReduxComponent extends Component{

    render() {
        return (
            <React.Fragment>
                <h2>Airline is {this.props.flight.airline}</h2>
                <h4>From {this.props.flight.from} to {this.props.flight.to}</h4>
                <button className={"customButton ripple"} onClick={this.props.changeAirline}>Change Airline</button>
                <button className={"customButton ripple"} onClick={this.props.changeDestination}>Change Destination</button>
            </React.Fragment>
        );
    }
}

export default connect(state => {
    return {
        flight : state.flight
    }
}, dispatch =>{
    return {
        changeAirline : () =>{
            console.log("changeAirline Clicked");
            dispatch({type:CHANGE_AIRLINE,payload:{airline:"6E"}})
        },
        changeDestination : () =>{
            console.log("changeDestination Clicked");
            dispatch({type:CHANGE_DESTINATION,payload:{to:"Pune"}})
        }
    }
})(ReduxComponent);