import React from 'react';
import {Button, Card, CardActions, CardMenu, CardText, CardTitle, Cell, Grid, IconButton, Tab, Tabs} from "react-mdl";

const ProjectCard = props =>{
    const style = {
        textDecoration:'none',
        padding:'5px 10px',
        margin:'5px 10px',
        color:'grey'
    }
    return (
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#000', fontWeight:'400', height:'176px', background: `url(${props.bgUrl}) center/cover`}}>{props.title}</CardTitle>
            <CardText style={{ minHeight:'200px'}}>
                {props.description}
            </CardText>
            <CardActions border style={{minHeight:'53px'}}>
                {props.github ? <a className="cardLink" target="_blank" href={props.github}>GitHub</a> : null}
                {props.liveDemo ? <a className="cardLink" target="_blank" href={props.liveDemo}>LiveDemo</a> : null}
            </CardActions>
        </Card>
    );
}

export default ProjectCard;