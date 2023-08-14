import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from "./Components/header";
// import Footer from "./Components/Footer";

const Home = () => {
    return (
      <>
        {" "}
          <Navbar />
        <div className="container">
          <h1 className="text-center mt-4">
            Welcome to Our Healthcare Platform
          </h1>
          <p className="text-center">
            Providing the best healthcare solutions for patients and
            professionals.
          </p>

          <div className="row mt-4">
            <p className="text-center">
              Explore our services and get in touch with healthcare
              professionals at your convenience.
            </p>
          </div>
        </div>
      </>
    );
};

export default Home;
