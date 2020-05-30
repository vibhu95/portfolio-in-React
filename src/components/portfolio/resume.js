import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import ResumeSinglePage from '../../assets/Vibhuti-Narayan-Resume_SinglePage.pdf';

class Resume extends Component{
    render() {
        return(
            <div>
                <a style={{textDecoration:'none', marginLeft:'90%', marginTop:'5px' , position:'fixed', zIndex:'10000 !important', boxShadow:'5px 10px 18px #191818'}}
                className={"customButton ripple"} href={ResumeSinglePage} target="_blank">Download</a>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                                src="https://media-exp1.licdn.com/dms/image/C5103AQG6u3k9rypkvQ/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=wxyhI0aGP_GJAHTI5OLysKIo0ZbPqBMwYgI10_FMJV8"
                                alt="avatar"
                                style={{height:'200px', borderRadius:'50%'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'2em', marginTop:'10px', paddingTop:'10px', textAlign:'center'}}>Vibhuti Narayan</h2>
                        <h6 style={{color:'grey'}}>Reactive Programming | Java | Vertx | SpringBoot WebFlux | NodeJS | ExpressJS | HTML5 CSS3 SASS JS | ReactJS Redux Hooks NextJS | RMQ | AMQ | Kafka | AWS | Docker | RazorPay PayUmoney</h6>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>Post Graduated in Advanced Computing from CDAC and Graduated in Computer Science Engineering from VBSP University.</p>
                        <p>Expertise in Third-Party Integrations, Aviation Solutions, Hospitality Solutions, HRMS Solutions, Payment Solutions, Reporting Solutions, Healthcare Solutions, Architecture Designing.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Certificates</h5>
                        <table>
                            <tr>
                                <td style={{width:'50%'}}>Linux Mastery</td>
                                <td style={{width:'25%'}}>Udemy</td>
                                <td style={{width:'25%'}}><a style={{textDecoration:'none'}} href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-3a3d134c-15cb-4b91-8e3a-c92e5ed040f4.pdf">Certificate</a></td>
                            </tr>
                            <tr>
                                <td style={{width:'50%'}}>ReactJS</td>
                                <td style={{width:'25%'}}>Udemy</td>
                                <td style={{width:'25%'}}><a style={{textDecoration:'none'}} href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-3a3d134c-15cb-4b91-8e3a-c92e5ed040f4.pdf">Certificate</a></td>
                            </tr>
                            <tr>
                                <td style={{width:'50%'}}>C++</td>
                                <td style={{width:'25%'}}>SoloLearn</td>
                                <td style={{width:'25%'}}><a style={{textDecoration:'none'}} href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-3a3d134c-15cb-4b91-8e3a-c92e5ed040f4.pdf">Certificate</a></td>
                            </tr>
                            <tr>
                                <td style={{width:'50%'}}>SQL</td>
                                <td style={{width:'25%'}}>SoloLearn</td>
                                <td style={{width:'25%'}}><a style={{textDecoration:'none'}} href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-3a3d134c-15cb-4b91-8e3a-c92e5ed040f4.pdf">Certificate</a></td>
                            </tr>
                            <tr>
                                <td style={{width:'50%'}}>Basics of Networking</td>
                                <td style={{width:'25%'}}>ATI</td>
                                <td style={{width:'25%'}}><a style={{textDecoration:'none'}} href="#">Certificate</a></td>
                            </tr>
                            <tr>
                                <td style={{width:'50%'}}>PHP</td>
                                <td style={{width:'25%'}}>Wings IT Solution</td>
                                <td style={{width:'25%'}}><a style={{textDecoration:'none'}} href="#">Certificate</a></td>
                            </tr>
                            <tr>
                                <td style={{width:'50%'}}>Ethical Hacking</td>
                                <td style={{width:'25%'}}>Ankit Fadia</td>
                                <td style={{width:'25%'}}><a style={{textDecoration:'none'}} href="#">Certificate</a></td>
                            </tr>
                            <tr>
                                <td style={{width:'50%'}}>J2EE</td>
                                <td style={{width:'25%'}}>Ducat</td>
                                <td style={{width:'25%'}}><a style={{textDecoration:'none'}} href="">Certificate</a></td>
                            </tr>
                            <tr>
                                <td style={{width:'50%'}}>Java</td>
                                <td style={{width:'25%'}}>Ducat</td>
                                <td style={{width:'25%'}}><a style={{textDecoration:'none'}} href="#">Certificate</a></td>
                            </tr>
                        </table>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>P/56, Sector 56, Gurgaon, Haryana, India - 122011</p>
                        <h5>Phone</h5>
                        <p>(+91) 8299471901</p>
                        <h5>Email</h5>
                        <p>vibhutinarayan995@gmail.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2013}
                            endYear={2017}
                            course={"Graduated in Computer Science Engineering"}
                            schoolName={"VBSPU"}
                            schoolDescription={"Graduated with First Devision. This is a four year graduation programme organized by VBSPU, State University"}
                        />
                        <Education
                            startYear={2017}
                            endYear={2018}
                            course={"Post Graduated in Advance Computing"}
                            schoolName={"CDAC"}
                            schoolDescription={"Six Months short term course offered by one of the most prestigious organization of India. C++, Data Structure, Software Engineering, Operating System, Java, Database, Computer Networks, Parallel Computing"}
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName={"Project Associate"}
                            company={"CDAC Research & Development"}
                            location={"Noida, India"}
                            jobDescription={"Worked as a Full Stack Developer (HTML, CSS, Bootstrap, Material Design, JS, jQuery, Struts, Jersey, Spring, Hibernate, JPA, Cordova, Iconic Mobile Apps, SVN)"}
                        />
                        <Experience
                            startYear={2019}
                            endYear={"present"}
                            jobName={"Software Engineer"}
                            company={"Antrepriz"}
                            location={"Gurgaon, India"}
                            jobDescription={"Working as a Fullstack Developer in the continuous development of the EKA ecosystem, a microservices-based architecture consisting of cutting edge tech stacks as ReactJS, ElectonJS, AWS services, RMQ, Vert.x(Java), NodeJS, Python, MySQL, MongoDB, Redis, Firebase, and many more."}
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill={"Java"}
                            progress={90}
                        />
                        <Skills
                            skill={"Reactive Programming"}
                            progress={80}
                        />
                        <Skills
                            skill={"Vertx"}
                            progress={90}
                        />
                        <Skills
                            skill={"NodeJS"}
                            progress={60}
                        />
                        <Skills
                            skill={"Express"}
                            progress={60}
                        />
                        <Skills
                            skill={"Python"}
                            progress={40}
                        />
                        <Skills
                            skill={"PHP"}
                            progress={50}
                        />
                        <Skills
                            skill={"ReactJS"}
                            progress={80}
                        />
                        <Skills
                            skill={"HTML5"}
                            progress={95}
                        />
                        <Skills
                            skill={"CSS3/SASS"}
                            progress={90}
                        />
                        <Skills
                            skill={"Bootstrap"}
                            progress={90}
                        />
                        <Skills
                            skill={"jQuery"}
                            progress={85}
                        />
                        <Skills
                            skill={"Flutter"}
                            progress={30}
                        />
                        <Skills
                            skill={"Ionic"}
                            progress={50}
                        />
                        <Skills
                            skill={"MySQL"}
                            progress={80}
                        />
                        <Skills
                            skill={"MongoDB"}
                            progress={80}
                        />
                        <Skills
                            skill={"Redis"}
                            progress={95}
                        />
                        <Skills
                            skill={"SQLite"}
                            progress={70}
                        />
                        <Skills
                            skill={"SQLite"}
                            progress={70}
                        />
                        <Skills
                            skill={"Docker"}
                            progress={80}
                        />
                        <Skills
                            skill={"AWS Services"}
                            progress={60}
                        />
                        <Skills
                            skill={"Payment Gateways"}
                            progress={80}
                        />
                        <Skills
                            skill={"Geo Maps"}
                            progress={80}
                        />
                        <Skills
                            skill={"Mailing"}
                            progress={80}
                        />
                        <Skills
                            skill={"Notification"}
                            progress={80}
                        />
                        <Skills
                            skill={"Git"}
                            progress={80}
                        />
                        <Skills
                            skill={"SVN"}
                            progress={80}
                        />
                        <Skills
                            skill={"RMQ"}
                            progress={80}
                        />
                        <Skills
                            skill={"Kafka"}
                            progress={80}
                        />
                        <Skills
                            skill={"Webservices"}
                            progress={90}
                        />
                        <Skills
                            skill={"WebSockets"}
                            progress={90}
                        />
                        <Skills
                            skill={"GraphQL"}
                            progress={50}
                        />
                        <Skills
                            skill={"AI/ML"}
                            progress={20}
                        />
                        <Skills
                            skill={"Chatbots"}
                            progress={40}
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Resume;