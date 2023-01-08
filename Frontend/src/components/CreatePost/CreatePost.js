import React from "react";
import './CreatePost.css'; 
function CreatePost() {

  return (
    <div className="Post-Page">
      <div className="create_Post_box">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input placeholder="Title..."
            
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea placeholder="Post..."
            />
            <input type="file" id="img" name="img" accept="image/*"></input>
        </div>
        

        <button> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;