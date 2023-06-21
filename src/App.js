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
import Home from "./Home";
import Navbar from "./Components/Navbar";
import Blog from './Blog';
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
