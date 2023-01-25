import React from "react";
import "./Logo.css";
import Ask4Help from "../../Assets/Ask4Help.png";

function Logo(){
  return(
    <div className="logo_image">
      <img ref={Ask4Help} alt=""/>
    </div>
  )
};

export default Logo;