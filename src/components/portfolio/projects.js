import React, {Component} from "react";
import {Button, Card, CardActions, CardMenu, CardText, CardTitle, Cell, Grid, IconButton, Tab, Tabs} from "react-mdl";
import ProjectCard from './projectCard';

class Project extends Component{

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    projects = {
        "0": {
            name:"Java",
            items:[{
                title:"New Safar",
                bgUrl:"https://www.gstatic.com/flights/app/illustration-flights-desktop.png",
                description:"New Safar is a Travel Portal where you can book flights/Hotel/Bus. I have done all the Backend part as well as DevOps part to make the portal live along with complete security.",
                guthub:"",
                liveDemo:"https://newsafar.com/"
            },{
                title:"e-Sushrut",
                bgUrl:"https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png",
                description:"e-Sushrut C-DAC’s Hospital Management Information System is a major step towards adapting technology to improve healthcare system. I have contributed as Fullstack Developer in this project, build complete Doctor Desk Design using HTML5, CSS3, Bootstrap, JS, jQuery, AJAX, and also rebuild all the core UI components of this project to ensure the responsiveness. Alongside I have also build related restfull API's for that.",
                guthub:"",
                liveDemo:"https://www.cdac.in/index.aspx?id=hi_his_noida_130318_sushrut"
            },{
                title:"MatchFinder",
                bgUrl:"https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png",
                description:"The idea was to provide a common platform for all the marriage agents to use each other's data without sharing complete data by just subscribing to MatchFinder with anyone suitable plans. We have done GeoMapping of the agent's location as well as the covered area by him to ensure maximum clarity to our consumers. Tech stack used J2EE, Spring, MySQL, HTML, CSS, Bootstrap, jQuery, JS, Google Map API, Mail Services, PayUmoney Payment Gateway.",
                guthub:"https://github.com/vibhu95/MatchFinder",
                liveDemo:""
            },{
                title:"DacorPrint",
                bgUrl:"https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png",
                description:"The idea was to design an e-Commerce portal to where you can get printed your own design on any product available on the portal. Tech stack used are Java, Servlets, MySQL, HTML, CSS, Bootstrap, jQuery, JS",
                guthub:"",
                liveDemo:""
            }]
        },
        "1": {
            name:"ReactJs",
            items:[{
                title:"Portfolio",
                bgUrl:"https://vibhuti.netlify.app/portfolio_icon.png",
                description:"Web portal for my portfolio. I have used almost all basic functionalities of ReactJS to complete this project like Components, React Router, Properties, State Management, Hooks API and even I am builing a flow for to utilize Redux, Ajax.",
                guthub:"https://github.com/vibhu95/portfolio-in-React",
                liveDemo:"https://vibhuti.netlify.app"
            }]
        },
        "2": {
            name:"NodeJs",
            items:[{
                title:"ERP Solution",
                bgUrl:"https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1566664762/ukalsvubeuwog27fzguz.jpg",
                description:"The aim was to provide few forms where user can add someone, login aside as well as view the details of all users and also can fill a form to get mail of contact. I complete this project to perform CRUD operations using NodeJS,ExpressJS and MongoDB.",
                guthub:"https://github.com/vibhu95/ExpressjsWithMongoDB",
                liveDemo:"https://expressjswithmongo.herokuapp.com"
            },{
                title:"Jarvis",
                bgUrl:"https://imageog.flaticon.com/icons/png/512/919/919825.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
                description:"I have build my ChatBot Jarvis using Dialogflow and as well as build a server on NodeJS to expose Webhooks for Dialogflow service. The aim was to perform few operations using my Bot, who can send someone immediate mail and even I can maintain my notes by just asking my Bot.",
                guthub:"https://github.com/vibhu95/dialogWebhook",
                liveDemo:"https://echojarvise.herokuapp.com/"
            }]
        }
    }

    toggleCategories(){
        let Items = this.projects[this.state.activeTab].items.map(i=>{
            return <ProjectCard title={i.title} 
                    bgUrl={i.bgUrl}
                    description={i.description}
                    github={i.guthub}
                    liveDemo={i.liveDemo} />
         });        
        return(
            <div className="projects-grid">
                {Items}
            </div>
        )
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Java</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Project;