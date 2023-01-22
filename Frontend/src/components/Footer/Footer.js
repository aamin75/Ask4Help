import React from "react";
import { useRef } from "react";

import './Footer.css';


function Footer (){
    return(
        <div className="footer">
                <div className="about_us">
                    <h4><a href="">About Ask4Help</a></h4>
                </div>
                <div className="contact_us">
                    <h4>Contact us:</h4>
                    <h5>Email: ask@A4H.com</h5>
                    <h5>Phone: +46 (0) 111 1111 11</h5>
                </div>
                <div className="follow_us">
                    <h4>Follow us:</h4>
                    <h5><a href="https://www.twitter.com">Twitter  <i className="fa fa-twitter" ></i></a></h5>
                    <h5><a href="https://www.facebook.com">Facebook  <i className="fa fa-facebook-f" ></i></a></h5>
                    <h5><a href="https://www.instagram.com">Instagram  <i className="fa fa-instagram" ></i></a></h5>
                </div>
        </div>
    )

}

export default Footer;