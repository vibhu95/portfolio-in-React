import React,{Component} from "react";
import {Cell, Grid, ProgressBar} from "react-mdl";

class Skills extends Component{
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{display:'flex'}}>{this.props.skill}
                        <ProgressBar
                            style={{margin:'auto' , width:'75%'}}
                            progress={this.props.progress}/>
                        <span style={{fontWeight:'200',fontSize:'16px',fontFamily:'Cursive'}}>{this.props.progress}%</span>
                    </div>
                </Cell>
            </Grid>
        );
    }
}

export default Skills;