import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div>
            <div className="contact-form-section">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you! Get in touch using the form below or reach out directly.</p>
                <form className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value="name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value="email"
                        required
                    />
                    <input
                        type="phone"
                        name="phone"
                        placeholder="Your Phone"
                        value="phone"
                        required
                    />
                    <input
                        type="service"
                        name="service"
                        placeholder="Your Service"
                        value="service"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value="message"
                        required
                    />
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm