import React,{Component} from "react";
import {Cell, Grid} from "react-mdl";

class Education extends Component{
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h5 style={{marginTop:'0px'}}>{this.props.course}, from <b>{this.props.schoolName}</b></h5>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        );
    }
}

export default Education;