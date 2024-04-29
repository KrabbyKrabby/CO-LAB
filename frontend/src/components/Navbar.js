import React, { useState, useEffect } from 'react'
import styles from './CSS/Navbar.module.css'
import logo from '../assets/colab_logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><button className='btn' onClick={() => navigate('/')}>Home</button></li>
        <li><button className='btn' >Community</button></li>
        <li><button className='btn' onClick={() => navigate('/profile')}>Profile</button></li>
        <li><button className='btn' >Contact Us</button></li>
      </ul>

      <ul>
        <li><button className='btn' onClick={() => navigate('/login')}>LogIn</button></li>
        <li><button className='btn' onClick={() => navigate('/signup')}>Sign Up</button></li>
      </ul>
    </nav>
  );
}

export default Navbar
