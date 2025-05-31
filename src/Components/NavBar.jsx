import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
        <Link to="/">Movie Flix</Link>
        </div>
        <div className="navbar-links">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/favourites' className="nav-link">Favourites</Link>
        </div>
    </div>
  )
}

export default NavBar