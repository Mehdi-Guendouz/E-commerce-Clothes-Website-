import React from 'react';
import "./contact.scss"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
    return (
        <div className="contact">
        <div className="wrapper">
          <span>BE IN TOUCH WITH US:</span>
          <div className="mail">
            <input type="text" placeholder="Enter your e-mail..." />
            <button>JOIN US</button>
          </div>
          <div className="icons">
            <FacebookIcon  className='icon-item'/>
            <InstagramIcon  className='icon-item'/>
            <TwitterIcon  className='icon-item'/>
            <GoogleIcon  className='icon-item'/>
            <PinterestIcon  className='icon-item'/>
          </div>
        </div>
      </div>
    );
}

export default Contact;
