import React from "react";
import { useRef } from "react";
// import Twitter from "../../Assets/twitter.png";

import './Footer.css';


function Footer (){
    // const twitterIcon= useRef(Twitter);
    return(
        <div className="footer">
                <div className="about_us">
                    <h3><a href="">About Ask4Help</a></h3>
                </div>
                <div className="contact_us">
                    <h3>Contact us:</h3>
                    <h4>Email:</h4>
                    <h4>Phone:</h4>
                </div>
                <div className="follow_us">
                    <h3>Follow us:</h3>
                    <h4><a href="https://www.twitter.com">Twitter</a></h4>
                    <h4><a href="https://www.facebook.com">Facebook</a></h4>
                    <h4><a href="https://www.instagram.com">Instagram</a></h4>
                </div>
        </div>
    )

}

export default Footer;