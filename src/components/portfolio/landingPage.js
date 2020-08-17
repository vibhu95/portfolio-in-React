import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";
import resumeSinglePager from '../../assets/Vibhuti-Narayan-Resume_SinglePage.pdf';
import resumeMultiPager from '../../assets/Vibhuti-Narayan-Resume_Multipage.pdf';
import imageSelf from '../../assets/self.jpeg';

class Landing extends Component{
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={imageSelf}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p style={{lineHeight:'35px'}}>Reactive Programming | Java | Vertx | SpringBoot & WebFlux | Express | NodeJS | ReactJS Redux Hooks NextJS | HTML/CSS | Bootstrap | JS | RMQ | AMQ | Kafka | AWS | Docker | RazorPay PayUMoney </p>
                            <div className="social-links-1">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/vibhuti-narayan-03ba768b/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/vibhu95" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a>

                                {/* Facebook */}
                                <a href="https://www.facebook.com/vibhutinarayan95" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>

                                {/* Facebook */}
                                <a href={resumeSinglePager} rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-download" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Landing;