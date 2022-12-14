import React from 'react'


import Header from './components/header/header'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'

//Pages
import About from './components/about/about'
import Contacts from './components/contacts/contact'
import Experience from './components/experience/experience'
import Testimonials from './components/testimonials/testimonials'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
function App() {
  return (
    <>
      <Header/>
      <Nav/>   
      <About/>   
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contacts/>
      <Footer/>


    </>
  )
}

export default App
