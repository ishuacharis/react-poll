import React from 'react'
import {Link}  from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className = "reset home">
      <nav className="nav">
        <ul className="height navLinks">
          <li className="navItem">
            <Link to="/" className="navLink">Home</Link>
          </li>
          <li>
            <Link to={{
              pathname: '/auth',
              search: '?a=login'
            }} className="navLink">Login</Link>
          </li>
          <li>
            <Link to="/testing" className="navLink">Testing</Link>
          </li>
          <li>
            <Link to="/housemates" className="navLink">Projects</Link>
          </li>
          <li>
            <Link to="/gallery" className="navLink">Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}


export default Home
