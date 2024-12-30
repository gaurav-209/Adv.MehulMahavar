import React from 'react'
import ContactForm from './ContactForm'

const Contacts = () => {
  return (
    <div>
        <div className="hero-section">
      <h1 className="hero-title">Contact Us</h1>
      <p className="hero-subtitle">Home &gt; Contact Us</p>
    </div>
    <ContactForm/>
    <div className="contact-details">
      <h2>Our Contact Details</h2>
      <p><strong>Address:</strong> 123 Main Street, Ahmedabad, Gujarat, India</p>
      <p><strong>Phone:</strong> +91 8347491728</p>
      <p><strong>Email:</strong> gauravmahavar2002@gmail.com</p>
      <p><strong>Office Hours:</strong> Mon-Fri: 9:00 AM - 5:00 PM</p>
    </div>

    <div className="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.939021716852!2d72.57071381546688!3d23.021623384953013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f72f16ffeb%3A0x8f539f4aa7309d56!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1700011111111"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
    </div>
  )
}

export default Contacts