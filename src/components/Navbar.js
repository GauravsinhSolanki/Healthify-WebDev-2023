import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/healthyCompany.jpg'

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='container'>
              <div className='logo'><img src={Logo} alt=''/></div>
              <div className='links'>
                    <Link className='link' to="/">
                        <h6>Home</h6>
                    </Link>
                    <Link className='link' to="/?cat=hospital">
                        <h6>Hospital</h6>
                    </Link>
                    <Link className='link' to="/?cat=doctors">
                        <h6>Doctors</h6>
                    </Link>
                    <Link className='link' to="/blog">
                        <h6>Blogs</h6>
                    </Link>

                    <span className='write'>
                        <Link className='link' to='/write'>Write</Link>
                    </span>

                    <span><Link to="/login" >Logout</Link></span>

              </div>
          </div>
      </div>
  )
}

export default Navbar