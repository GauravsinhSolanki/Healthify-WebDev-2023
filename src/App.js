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
import ContactUsPage from "./ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route path="/" element={<Navigate to="/faq" />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
