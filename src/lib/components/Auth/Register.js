import React from 'react'
import {Link} from 'react-router-dom'

function Register() {

  return (
    <div className = "auth__container">
      <div className="auth__content">
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
          <Link to={{
            pathname: '/auth',
            search: '?a=login'
          }} className="link-item">Already have an account?</Link>
        </div>
        <div className="field">
            <button className="btn">Register</button>
        </div>
      </div>
    </div>
  )

}


export default Register
