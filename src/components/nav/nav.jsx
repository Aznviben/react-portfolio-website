import React from 'react'
import "./nav.css"
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {AiOutlineCustomerService} from 'react-icons/ai'
import {MdRateReview} from 'react-icons/md'
import{useState} from 'react'
function Nav() {

const [activeNav,setActiveNav]= useState('#'); 

return (
    <div>
      <nav>
        <a href = "#"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
        <a href = "#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>         
        <a href = "#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillBook/></a>
        <a href = "#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiOutlineCustomerService/></a>        
        <a href = "#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdRateReview/></a>
      </nav>
    </div>
  )
}

export default Nav
