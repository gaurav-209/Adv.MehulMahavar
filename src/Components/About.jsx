import React from 'react'
import "./About.css"
import PracticeAreas from './PracticeAreas'

const About = () => {
  return (
    <div>
        <div className="hero-section">
      <h1 className="hero-title">About</h1>
      <p className="hero-subtitle">Home &gt; About</p>
    </div>

    <section id='about'>
     <div className="about-container">
     <div className="about-left">
        <img src="public/images/Gulabbhai_Mahavar.png" alt="" />
      </div>
      <div className="about-right">
      <div className="about-father">
      <h2>About Advocate Gulabbhai Mahavar</h2>
      <p>
        Advocate Gulabbhai Mahavar is the esteemed <strong>first-generation advocate</strong> in the Mahavar family, paving the way for a legacy of legal excellence. With over <strong>30 years of experience</strong>, he has become a trusted and respected figure in the legal profession. Holding a <strong>B.Com</strong> and <strong>LL.B</strong>, he specializes in <strong>criminal and family law</strong>, practicing in the lower courts. His vast knowledge, sharp legal acumen, and unwavering commitment to justice have earned him the trust of countless clients. Known for his integrity and dedication, Advocate Gulabbhai Mahavar has set a high standard in the legal field, inspiring the next generation.
      </p>
    </div>
    <div className="numbers">
      <h2>30+</h2> <p>Years Of Experience</p>
    </div>
    <div className="numbers">
      <h2>200+</h2> <p>Case Solved</p>
    </div>
    <div className="numbers">
      <h2>250+</h2> <p>Happy Clients</p>
    </div>
      </div>
     </div>

     <div class="about-container">
            <div className="about-left">
              <img src="/images/Mehul_Mahavar_Advocate_Image.png" alt="Mehul Mahavar Advocate Image" />
            </div>

            <div className="about-right">
            <div className="about-father">
      <h2>About Advocate Mehul Mahavar</h2>
      <p>
        Advocate Mehul Mahavar, following in the footsteps of his father, Advocate Gulabbhai Mahavar, represents the <strong>second generation of legal excellence</strong> in the Mahavar family. With over <strong>5 years of professional experience</strong>, he has quickly established himself as a skilled and dedicated advocate specializing in <strong>family law, criminal law, civil litigation, and property cases</strong>.
      </p>
      <p>
        A graduate with a <strong>B.Tech in Computer Science</strong> and an <strong>LL.B</strong>, Mehul brings a modern and analytical approach to legal practice, ensuring his clients receive innovative solutions and effective representation. Known for his sharp problem-solving skills, deep knowledge of the law, and client-focused approach, he is committed to delivering justice with integrity.
      </p>
      <p>
        Advocate Mehul Mahavar’s growing reputation, combined with his dedication to upholding the high standards set by his father, makes him a trusted name in the legal profession.
      </p>
    </div>
    <div className="numbers">
      <h2>30+</h2> <p>Years Of Experience</p>
    </div>
    <div className="numbers">
      <h2>200+</h2> <p>Case Solved</p>
    </div>
    <div className="numbers">
      <h2>250+</h2> <p>Happy Clients</p>
    </div>
            </div>
          </div>
    </section>
    <section>
      <PracticeAreas/>
      <div className="mission-section">
      <h2>Our Mission</h2>
      <p>
        To deliver justice with unwavering commitment, integrity, and professionalism. Advocate Mehul Mahavar strives to provide client-focused legal solutions, ensuring fairness, transparency, and dedication in every case. Our mission is to uphold the principles of justice while building trust and long-lasting relationships with clients.
      </p>
    </div>
    </section>
    </div>
  )
}

export default About