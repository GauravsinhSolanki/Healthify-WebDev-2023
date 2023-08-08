import React from 'react';
import './Home.css';
import Blog from './Blog';
import './style.css';
import Patient from './Patient';
// import Navbar from "./Components/header";
const Home = () => {
  return (
    <div className='home'>
      <div className='posts'>
        <Blog></Blog>
        <Patient></Patient>
      </div>
    </div>
  );
};

export default Home;
