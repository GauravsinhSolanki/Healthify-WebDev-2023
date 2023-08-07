import React from "react";
import Features from "../Features/Features";
import Navbar from "../../Components/header";
import "./style.css";
const AppointmentHome = () => {
  return (
    <>
      <Navbar />
      <div>
        <img
          src="https://images.unsplash.com/photo-1576765974257-b414b9ea0051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80"
          alt="Doctor and Patient"
        />
      </div>
      <Features />
    </>
  );
};

export default AppointmentHome;
