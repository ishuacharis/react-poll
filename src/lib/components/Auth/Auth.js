import React from 'react'
import {useLocation} from 'react-router-dom'
import './Auth.css'
import Login from './Login'
import Register from './Register'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}


function Auth() {
  let query = useQuery()
  let comp =  query.get('a') === 'login' ? <Login /> : <Register />

  return (
    <div className="container">{comp}</div>
  )


}

export default Auth
