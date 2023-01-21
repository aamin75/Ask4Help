import Footer from './components/Footer/Footer';
import './App.css';
import NavBar from "./components/Header/NavBar";
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import CreatePost from './pages/CreatePost/CreatePost';

const [isAuth, setIsAuth] = useState(false); // may move to another file

const Layout= ()=>{
  return(
    <>
      <NavBar />
      <Outlet />
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
        path: "/createpost",
        element: <CreatePost />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login seIsAuth={setIsAuth} />,
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
   
  );
}

export default App;