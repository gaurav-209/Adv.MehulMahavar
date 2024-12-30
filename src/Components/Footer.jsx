import React from 'react'
import { NavLink } from 'react-router'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='para'>
          <p>
          Advocate Mehul Mahavar delivers exceptional legal expertise across family, criminal, business, and property law, setting a benchmark for excellence with a perfect blend of experience and dedication, serving clients nationwide. Committed to achieving justice, he upholds the highest standards of service for every client.
          </p>
        </div>
        <div className='practice-areas'>
          <h3>Practice Areas</h3>
          <ul>
            <li>Civil Lawyer</li>
            <li>Family Lawyer</li>
            <li>Criminal Lawyer</li>
            <li>Property Lawyer</li>
            <li>Litigation Lawyer</li>
          </ul>
        </div>
        <div className='useful-links'>
          <h3>Useful Links</h3>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/">Home</NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/about">About</NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/services">Services</NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/contacts">Contacts</NavLink>
        </div>
        <div className='keepInTouch'>
          <h3>Keep In Touch</h3>
          <p>50, Shree Nagar Society, Behind Pratap Kunj Society, Vasana, Ahmedabad-380007</p>
          <p>Adv.mehulmahavar@gmail.com</p>
          <p>+91 8347491728</p>
          <p>Monday-Friday(9.00am-9.00pa)</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer