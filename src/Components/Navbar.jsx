import React from 'react'
import './Navbar.css'
import { useRef } from 'react'
import { NavLink } from 'react-router'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <div>
        <header>
          <img src="/images/Mehul_Mahavar_Advocate_Logo.png" alt="Mehul_Mahavar_Advocate_Logo.png" />
          <nav ref={navRef}>
              <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/">Home</NavLink>
              <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about">About</NavLink>
              <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/services">Services</NavLink>
              <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/contacts">Contacts</NavLink>
              <button className='nav-btn nav-close-btn'  onClick={showNavbar}>
                <FaTimes/>
              </button>
          </nav>
          <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
          </button>
        </header>
    </div>
  )
}

export default Navbar