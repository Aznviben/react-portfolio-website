import React from 'react'
import ME from '../../assets/me-about.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiFillFileText} from 'react-icons/ai'
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
              <article className="about__card">
              <BsFillAwardFill className='about__icon'/>
              <h5> Experience </h5>
              <small>3+ Years Working</small>
              </article>
              <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5> Clients </h5>
              <small>300 Clients worldwide</small>
              </article>
              <article className="about__card">
              <AiFillFileText className='about__icon'/>
              <h5> Projects</h5>
              <small>80+ completed projects</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Molestiae pariatur aperiam magnam aut. Recusandae possimus
               illum dolores, consectetur placeat vero sit cumque aperiam facilis ex,
                quos cupiditate veniam nobis doloribus.
            </p>
            <a href='#contact' classname='btn btn-primary'>Lets Talk</a>

            </div>
          </div>


        </section>
    </div>
  )
}

export default About
