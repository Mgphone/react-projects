import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
   <div className='nav-center'>
   <Link to="/">
    <img className="logo" src={logo} alt="logo" />
    </Link>
    <ul className='nav-links'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/luckydraw">Your Cocktail</Link></li>
    </ul>
    
    
   </div>
    </nav>
  )
}

export default Navbar
