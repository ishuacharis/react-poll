import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className = "auth__container">
      <div className = "auth__content">
        <div className="auth__socials"></div>
        <div className="divider">
          <span className="line left"></span>
          <span className="or">OR</span>
          <span className="line right"></span>
        </div>
        <div className="field__content">
          <div className="field">
            <input type="email" className="input" placeholder="Email" />
          </div>
          <div className="field">
            <input type="password" className="input" placeholder="Password" />
          </div>
        </div>
        <div className="link">
          <Link to="#" className="link-item">Forgot password?</Link>
          <Link to={{
            pathname: '/auth',
            search: '?a=register'
          }} className="link-item">Dont have an account?</Link>
        </div>
        <div className="field">
            <button className="btn">Login</button>
        </div>
      </div>
    </div>
  )
}


export default Login
