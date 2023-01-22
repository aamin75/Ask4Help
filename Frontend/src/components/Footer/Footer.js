import React from "react";
import { useRef } from "react";
// import Twitter from "../../Assets/twitter.png";

import './Footer.css';


function Footer (){
    // const twitterIcon= useRef(Twitter);
    return(
        <div className="footer">
                <div className="about_us">
                    <h4><a href="">About Ask4Help</a></h4>
                </div>
                <div className="contact_us">
                    <h4>Contact us:</h4>
                    <h5>Email:</h5>
                    <h5>Phone:</h5>
                </div>
                <div className="follow_us">
                    <h4>Follow us:</h4>
                    <h5><a href="https://www.twitter.com">Twitter</a></h5>
                    <h5><a href="https://www.facebook.com">Facebook</a></h5>
                    <h5><a href="https://www.instagram.com">Instagram</a></h5>
                </div>
        </div>
    )

}

export default Footer;