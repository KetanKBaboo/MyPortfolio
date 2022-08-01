import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import "../styles/Footer.css"
const Footer =()=>{
return(
    <div className="footer">
        <h4 className="footer-title">Follow me on---</h4>
        <div className="social-media-icons">
            <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/ketan-kumar-baboo/'}/>
            <InstagramIcon onClick={event =>  window.location.href='https://www.instagram.com/ketan_kb9/'}/>
            <TwitterIcon onClick={event =>  window.location.href='https://twitter.com/K2B_99'}/>
            <FacebookIcon onClick={event =>  window.location.href='https://www.facebook.com'}/>
        </div>
        <p>&copy;Ketan KB</p>
    </div>
)
}
export default Footer;