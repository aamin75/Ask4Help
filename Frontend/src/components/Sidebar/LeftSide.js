import React from "react";
import "./LeftSide.css";

function LeftSide(){
  return(
  
    
    
    <div className="left-side">
    <div className="checkbox">
      <input type="checkbox" id="checkbox-1" />
      <label htmlFor="checkbox-1">Health</label>
    </div>
    <div className="checkbox">
      <input type="checkbox" id="checkbox-2" />
      <label htmlFor="checkbox-2">Computer</label>
    </div>
    <div className="checkbox">
      <input type="checkbox" id="checkbox-3" />
      <label htmlFor="checkbox-3">Programming</label>
    </div>
    <div className="checkbox">
      <input type="checkbox" id="checkbox-4" />
      <label htmlFor="checkbox-4">Cars</label>
    </div>
  </div>
    
  )
};

export default LeftSide;