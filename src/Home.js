import React from 'react';
import './Home.css';
import Blog from './Blog';
import './style.css';
const Home = () => {
  return (
    <div className='home'>
      <div className='posts'>
        <Blog></Blog>
      </div>
    </div>
  );
};

export default Home;
