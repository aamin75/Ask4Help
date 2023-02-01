import './Login.css';
import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import app from './firebase-config';


function Login () {
  const auth = getAuth(app);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = () =>{   

    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location.pathname = "/"
        alert("Success sign in")
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
        // ..
      }
    );
  }

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      
        const user = userCredential.user;
        console.log(user);
        alert("Create user account")  
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
      }
    );
  }

  return (
    <div className='container-login'>
      <h1>SignIn with Email</h1>
      <input type={"email"} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
      <input type={"password"} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
      <button className='btn-1' onClick={signUp}>SignUp</button>
      <button className='btn-2' onClick={signIn}>SignIn</button>
  </div>
  )
}

export default Login;