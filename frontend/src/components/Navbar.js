import React from 'react'
import './Navbar.css'
import logo from '../assets/colab_logo.png'


const Navbar = () => {
  return (
    <nav className='container'>
      <img src= {logo} alt="" className='logo'/>
      <ul>
        <li><button className='btn'>Home</button></li>
        <li><button className='btn'>Community</button></li>
        <li><button className='btn'>Profile</button></li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>

      <ul>
        <li><button className='btn'>LogIn</button></li>
        <li><button className='btn'>Sign Up</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
