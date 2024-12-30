import React from 'react'
import './Home.css'
import ServiceCard from './ServiceCard'
import { Link } from 'react-router'
import WhyChooseUs from './WhyChooseUs'


function Home() {

  return (
    <div>
      <main>
        <div class="hero-banner">
          <div class="hero-content">
            <h1>Justice Served with Expertise</h1>
            <p>Your Trusted Legal Partner</p>
            <a href="/contacts" class="cta-button">Schedule a Consultation</a>
          </div>
        </div>

        <section id="about">
          <div class="about-container">
            <div className="about-left">
              <img src="/images/Mehul_Mahavar_Advocate_Image.png" alt="Mehul Mahavar Advocate Image" />
            </div>

            <div className="about-right">

              <h2>About Mehul Mahavar</h2>
              <p>
                Advocate Mehul Mahavar is a highly skilled legal professional with expertise in corporate law, family disputes, and criminal defense. Known for delivering personalized legal solutions with integrity and dedication, Mehul has built a strong reputation for helping clients navigate legal complexities effectively.
              </p>
              <p>
                Whether handling high-profile cases or offering tailored legal advice, Mehul's approach is always focused on achieving the best outcomes for clients. A member of [Bar Association Name], Mehul is committed to providing transparent and result-oriented legal services.
              </p>
              <a href="#contact" class="cta-button">Learn More</a>
            </div>
          </div>
        </section>

        <section id="services">
          <div class="services-container">
            <h2>Legal Services Offered</h2>
            <p>Expert legal advice and representation tailored to your needs.</p>
            <div class="servicecards">
              <ServiceCard />
              <div className="more-services">
                <Link to="/services">
                  <button className="btn-more">More About Services</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='WhyChooseUs'>
          <WhyChooseUs />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home