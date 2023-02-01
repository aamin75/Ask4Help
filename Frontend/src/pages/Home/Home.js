import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../Login/firebase-config";
import './Home.css';


function  Home(isAuth)  {
  const mockPosts=[    
    {title:"Test 1",post:"text for 1st post", email:"user1@email.com"},
    {title:"Test 2",post:"text for 2nd post", email:"user2@email.com"},
    {title:"Test 3",post:"text for 3rd post", email:"user3@email.com"},
  ];
  const [postLists, setPostList]= useState(mockPosts);
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