import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/create" className="navbar-link">Create Compaign</Link></li>
        <li className="navbar-item"><Link to="/compaign" className="navbar-link">Compaign Page</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
