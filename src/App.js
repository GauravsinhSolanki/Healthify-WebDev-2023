import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Registration from "./Registration";
import Profile from "./Profile";
import FAQPage from "./FAQ";
<<<<<<< HEAD
import Home from "./Home";
import Navbar from "./Components/Navbar";
import Blog from './Blog';
import './style.css';
=======
import ContactUsPage from "./ContactUs";
>>>>>>> c5d974f8f22f065c54f9e186e3e324f0f0815d9c

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
