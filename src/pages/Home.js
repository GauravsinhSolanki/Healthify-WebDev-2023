import React from 'react'
import Logo from '../img/medicalBg.jpg'

const Home = () => {
  return (
    <div className='home'>
      <div className='posts'>
      <div className='logo'><img src={Logo} alt=''/></div>
      </div>
    </div>
  )
}

export default Home