import React from 'react'
import logo from '../Components/Pictures/logo.png'

const Header = () => {
  return (
    <div>
       <h2 className='head'>
       <img src={logo} alt="Logo" className="logo"/>
       <span className='ct'> Contact Us</span>
       </h2>
       </div>
  )
}

export default Header
