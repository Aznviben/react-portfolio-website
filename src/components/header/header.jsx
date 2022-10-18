import React from 'react'
import "./header.css"

//assets
import CTA from "./CTA"
import ME from '../../assets/me.png'
import Headersocial from './headersocial'
const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Benjamin Dinaliahamia</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <Headersocial/>
        <div className="me">
            <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className= 'scroll__down'> Scroll Down</a>


        </div>
    </header>
  )
}

export default Header
