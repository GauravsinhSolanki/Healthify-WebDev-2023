// import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Home from './pages/Home';
import Single from './pages/Single';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import NavBar from './components/Navbar'
import "./style.css"

const Layout = () =>{
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  );
  };
  
  


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/single",
        element:<Single/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/write",
        element:<Write/>
      }
    ]

  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
  
]);



function App() {
  return (
    <div className='app'>
      <div className='container'>
          <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
