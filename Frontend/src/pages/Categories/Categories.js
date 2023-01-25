import React, { useState } from "react";
import './Categories.css';

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
  // const [category,setCategory]= useState(null);
  
  
  function myFunc1(){ 
    const categories =["Urgent","Health","Education","Computer","Programming","Travel","Transport","Cars","Sport","Humaneness","Law"];
    var ul = document.createElement('ul');

    // categories.forEach(myFunc2)
    for (var i=0; i<categories.length; i++){
      var li=document.createElement('li');
      li.innerHTML=li.innerHTML + categories[i];
      ul.appendChild(li);
    }

    // function myFunc2(element,index,arr){
    //   var li = document.createElement("li");
    //   li.appendChild(document.createTextNode(element)); //.appendChild(document.createTextNode(value));
    //   ul.appendChild(li);
    // };
  };
  // document.getElementById("catList").appendChild().innerHTML=categories;

  return(
    <div className="all_categories">
      <h3>Categories</h3>
      <div className="list_group">
        <ul className="list" id="catList">
          {myFunc1}
          <p>test1</p>
        </ul>
      </div>
    </div>
  )
};

export default Categories;