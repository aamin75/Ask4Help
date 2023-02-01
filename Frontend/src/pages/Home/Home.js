import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../Login/firebase-config";
import './Home.css';


function  Home(isAuth)  {
  const [postLists, setPostList]= useState([{title:"test1", post:"this is a post", email:"user@gmail.com"},{title:"test5", post:"this is a post3", email:"user3@gmail.com",}, {title:"this title", post:"this is a post test", email:"admin@gmail.com"}]);
  const postsCollection = collection(db, "post");
  useEffect(()=>{
    const getPost = async () => {
      const data = await getDocs(postsCollection);
      setPostList(data.docs.map((doc)  => ({...doc.data(), id: doc.id})));
    };
    getPost();
  });

  return (
    <div className="home-container">
      <div className="box-post">
      {postLists.map((post) => {
        return (
          <div className="post">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              
           
            <div className="postTextContainer"> {post.postText} </div>
            <h3>{post.post}</h3>
            <h3>{post.email}</h3>
            
          </div>
          
        );
      })}
      </div>
    </div>
   )   
}

export default Home;