import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../Login/firebase-config";
import './Home.css';


function  Home(isAuth)  {
  const [postLists, setPostList]= useState([]);
  const postsCollection = collection(db, "post");
  useEffect(()=>{
    const getPost = async () => {
      const data = await getDocs(postsCollection);
      setPostList(data.docs.map((doc)  => ({...doc.data(), id: doc.id})));
    };
    getPost();
  });

  return <div className="home-container">{postLists.map(( post)=>{
    return (
      <>
        <div className="post">{post.title}</div>
        <h3>{post.email}</h3>
      </>
    )
  })}</div>
     
}

export default Home;