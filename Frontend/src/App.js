import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import Navbar from "./Components/Navbar";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Blog from "./Blog";
import Single from "./Single";

import FAQPage from "./FAQ";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/single" element={<Single/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
