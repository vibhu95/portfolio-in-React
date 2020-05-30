import React, {Component} from "react";
import {Button, Card, CardActions, CardMenu, CardText, CardTitle, Cell, Grid, IconButton, Tab, Tabs} from "react-mdl";

class Project extends Component{

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if (this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/*// Project #1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center/cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/*// Project #2*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center/cover'}}>React Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/*// Project #3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center/cover'}}>React Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if (this.state.activeTab === 1){
            return (
                <div><h1>This is Angular</h1></div>
            )
        }else if (this.state.activeTab === 2){
            return (
                <div><h1>This is Java</h1></div>
            )
        }else if (this.state.activeTab === 3){
            return (
                <div><h1>This is NodeJS</h1></div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid> */}
            </div>
        );
    }
}
export default Project;