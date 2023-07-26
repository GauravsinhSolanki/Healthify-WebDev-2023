import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import Navbar from "./Components/Navbar";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Blog from "./Blog";
import Single from "./Single";
import HospitalList from "./Components/HospitalList/HospitalList";
import Features from "./Hospitals/Features/Features";
import Hospital from "./Components/Hospital/Hospital";
import FAQPage from "./FAQ";
import Doctor from "./Components/Doctor/Doctor"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/patients" element={<Features />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/hospitals" element={<HospitalList />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single" element={<Single />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
