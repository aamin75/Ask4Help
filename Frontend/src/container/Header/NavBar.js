import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './NavBar.css'; 
import Home from "../Home/Home";
import CreatePost from "../../components/CreatePost/CreatePost";
import Login from "../../components/Login/Login";

function  NavBar()  {
  return (
    <Router>
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>
      <Link to="/createpost"> Create Post </Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/login" element={<Login  />} />
    </Routes>
  </Router>
  )
}

export default NavBar;
