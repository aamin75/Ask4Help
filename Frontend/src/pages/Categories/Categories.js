import React, { useState } from "react";
import './Categories.css';
import { categories } from "../../Constants";

// function getEventTarget(e) {
//   e = e || window.event;
//   return e.target || e.srcElement; 
// };
 
// let ul = document.getElementById('catList');
// const index = [...ul.children].indexOf(e.target);

// function callCategory(index){
//   switch(index){
//     case 0:
//       console.log("0");
//       break;
//     case 1:
//       console.log("1");
//       break;
//     case 2:
//       console.log("2");
//       break;
//   }
// };

function Categories(){
  return(
    <div className="all_categories">
      <h3>Categories</h3>
      <div className="list_group">
        <ul className="list" id="catList">
          {categories.map((category) => (<li>{category}</li>))}
        </ul>
      </div>
    </div>
  )
};

export default Categories;