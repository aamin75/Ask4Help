import React, {  useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './NavBar.css'; 
// import Home from "../../pages/Home/Home";
// import CreatePost from "../../pages/CreatePost/CreatePost";
// import Login from "../../pages/Login/Login";
import Ask4Help from "../../Assets/Ask4Help.png";
import { auth } from "../../pages/Login/firebase-config"
import { signOut } from 'firebase/auth';


function  NavBar()  {
  const [isAuth, setIsAuth] = useState(false);
  
  
  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  });

  const signUserOut = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      window.location.pathname ="/login";
    });
  };


  return (
    
    // <Router>
    <nav>
      <Link to="/"><img src={Ask4Help} alt="Ask4Help"/></Link>
      <Link to="/"> Home{isAuth} </Link>
      <Link to="/categories"> Categories </Link>
      <Link to="/posts"> Search </Link>
      {isAuth ? (<Link to="/post"> Create Post </Link>):(<></>)}

      <Link to="/notifications"> Notifications </Link>
      {!isAuth ? ( 
          <Link to="/login">Login</Link> 
        ) : ( 
          <button className='sign-out-btn' type='button' onClick={signUserOut}>Log out</button>
        )}
    </nav>

    /* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/login" element={<Login seIsAuth={setIsAuth} />} />
    </Routes> */
  // </Router>
  )
}

export default NavBar;
