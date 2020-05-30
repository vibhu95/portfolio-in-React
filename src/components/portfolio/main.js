import React from "react";
import {Switch, Route} from "react-router-dom";
import Landing from "./landingPage";
import About from "./aboutme";
import Contact from "./contactus";
import Project from "./projects";
import Resume from "./resume";

const Main = () =>(
 <Switch>
     <Route exact path="/" component={Landing} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     <Route path="/projects" component={Project} />
     <Route path="/resume" component={Resume} />
 </Switch>
)

export default Main;