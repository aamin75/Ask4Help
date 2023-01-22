import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './NavBar.css'; 
import Home from "../../pages/Home/Home";
import CreatePost from "../../pages/CreatePost/CreatePost";
import Login from "../../pages/Login/Login";


function  NavBar()  {
  const [isAuth, setIsAuth] = useState(false);
  return (
    // <Router>
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/categories"> Categories </Link>
      <Link to="/createpost"> Create Post </Link>
      <Link to="/notifications"> Notifications </Link>
      <Link to="/login"> Login </Link>
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