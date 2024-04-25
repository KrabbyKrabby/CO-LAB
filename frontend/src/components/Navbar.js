import React, { useState, useEffect } from 'react'
import styles from './CSS/Navbar.module.css'
import logo from '../assets/colab_logo.png'


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


  return (
    <nav className={styles.navbar} 
    style={{ backgroundColor: scrollPosition > 20 ? '#0f112e' : 'transparent' }}
    >
      <img src= {logo} alt="" className={styles.logo} />
      <ul>
        <li><button className={styles.navBtn}>Home</button></li>
        <li><button className={styles.navBtn}>Community</button></li>
        <li><button className={styles.navBtn}>Profile</button></li>
        <li><button className={styles.navBtn}>Contact Us</button></li>
      </ul>

      <ul>
        <li><button className={styles.loginBtn}>LogIn</button></li>
        <li><button className={styles.signupBtn}>Sign Up</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
