import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form  action="/home">
        <input required type="text" placeholder='username'/>
        <input required type='password' placeholder='password'/>
        <button>Login</button>
        <span> Don't you have a account? <Link to="/register" >Register</Link></span>
      </form>
    </div>
  )
}


export default Login