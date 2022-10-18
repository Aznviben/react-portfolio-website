import React from 'react'
import ME from '../../assets/me-about.jpg'
function About() {
  return (
    <div>
        <section id='about'>
          <h5>Get to know</h5>
          <h2>About Me</h2>

          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About Image" />
              </div>
            </div>

            <div className="about__content">
            <div className="about__cards">
              <h5> Experience </h5>
              <small>3+ Years Working</small>
            </div>

            </div>
          </div>


        </section>
    </div>
  )
}

export default About
