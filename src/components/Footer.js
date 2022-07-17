import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/mskuresearchgroup/">
      <InstagramIcon  /> </a>
      <a href="https://twitter.com/MSKUMvrg">
      <TwitterIcon />  </a>
      <a href="https://www.linkedin.com/company/msku-metaverse-research-group/">
      <LinkedInIcon />  </a>
          
      </div>
      <p> &copy; 2022 fairverse.ceng.mu.edu.tr</p>
    </div>
  );
}

export default Footer;
