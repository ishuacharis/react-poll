import React from 'react'
import {useLocation, Redirect} from 'react-router-dom'
import './Auth.css'
import Login from './Login.jsx'
import Register from './Register.jsx'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}


function Auth() {
 
  let query = useQuery()
  let comp =  query.get('a') === 'login' ? <Login /> : <Register />

  return (
    <div className="container">
      <div className = "auth__container">
        <div className = "auth__content">
          <div className="auth">

            <div className="auth__socials"></div>
            <div className="divider">
              <span className="line left"></span>
              <span className="or">OR</span>
              <span className="line right"></span>
            </div>
              {comp}
          </div>
        </div>
      </div>
    </div>
    
  )


}

export default Auth
