import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem("token")
  if(token){
    setIsAuthenticated(true)
    console.log(token)
  }
  console.log(isAuthenticated)

  },[])
  const handlelogout=()=>{
    localStorage.removeItem("token")
    alert("Logged out successfully")
    navigate("/")
  }

  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/create" className="navbar-link">Create Compaign</Link></li>
        <li className="navbar-item"><Link to="/compaign" className="navbar-link">All Compaigns</Link></li>
        <li className="navbar-item"><Link to="/signup" className="navbar-link">Signup</Link></li>
        {isAuthenticated===true ?(<li className="navbar-item" onClick={(handlelogout)}><Link className="navbar-link">Logout</Link></li>) : (<li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>)}
        
        
      </ul>
    </div>
  )
}

export default Navbar
