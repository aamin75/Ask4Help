import React, { useEffect, useState } from "react";
import './CreatePost.css'; 
import {addDoc, collection} from 'firebase/firestore'
import {db, auth} from "../Login/firebase-config"
import { useNavigate } from "react-router-dom";
function CreatePost({isAuth}) {
const user = auth.currentUser;
const  [title, setTitle] = useState("");
const  [post, setpost] = useState("");

const postsCollection = collection(db, "post")
let navigate = useNavigate();
const createPost = async() =>{
 await addDoc(postsCollection,{
  title,
  post,
  email: user.email,
  author:{ id:auth.currentUser.uid }} )
  navigate("/");
};

//useEffect(()=>{
  //if (!isAuth){
    //navigate("/login")
  //}
//}, []);



  return (
    <div className="Post-Page">
      <div className="create_Post_box">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input placeholder="Title..." onChange={(event) =>{
              setTitle(event.target.value);
            }
          }/>
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea placeholder="Post..." onChange={(event) =>{
              setpost(event.target.value);
            }
          }/>
          <input type="file" id="img" name="img" accept="image/*"></input>
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;