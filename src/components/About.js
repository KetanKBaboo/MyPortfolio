import React from "react";
import "../styles/About.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
const About = () => {
  return (
      <div className="about-section" id="about-me">
        <div className="about">
          <h2 className="about-title">Hi, My Name is <span style={{color: '#00ffb1',backgroundColor: "black"}}>Ketan</span></h2>
          <p className="about-description">
            I am a kind of person who likes to explore new things, learn about
            the things, and help make things happen. Moreover, I am a beginner
            in software development industry and with passage of time, I have
            been improving myself with required skills to excel and tackle the
            challenges
          </p>
          <div className="social-media-icons" id="social-icons">
            <GitHubIcon onClick={event=> window.location.href = "https://github.com/KetanKBaboo"}/>
            <LinkedInIcon onClick={event=> window.location.href = "https://www.linkedin.com/in/ketan-kumar-baboo/"}/>
            <EmailIcon onClick={() => window.open('mailto:babookk99@gmail.com')}/>
          </div>
        </div>
      </div>
  );
};

export default About;
