import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Home from './pages/Home/Home';
import CreatePost from './pages/CreatePost/CreatePost';
import ShowPost from './pages/ShowPost/ShowPost';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Categories from './pages/Categories/Categories';
import Notifications from './pages/Notifications/Notifications';
import SearchPost from './pages/SearchPost/SearchPost';
import Footer from './components/Footer/Footer';
import NavBar from "./components/Header/NavBar";
import LeftSide from './components/Sidebar/LeftSide';
import RightSide from './components/Sidebar/RightSide'
import './App.css';


const Layout= ()=>{
  return(
    <>
      <NavBar />
      <div className='main'>
        <LeftSide />
        <div className='center'>
          <Outlet />
        </div>
        <RightSide />
      </div>
      <Footer />
    </>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <ShowPost />,
      },
      {
        path: "/post",
        element: <CreatePost />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/posts",
        element: <SearchPost />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  // const [isAuth, setIsAuth] = useState(false); // may move to another file
  return (
    <><div className='home-container1'></div><div className="container">
      <RouterProvider router={router} />
    </div></>
   
  );
}

export default App;