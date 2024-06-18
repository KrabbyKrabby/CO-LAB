import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/Navbar.module.css';
import logo from '../assets/colab_logo.png';
import profilePicture from '../assets/profilepicture.png'; // Import the profile picture

const Navbar = ({ isLoggedIn, setIsLoggedIn, username, setUsername }) => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
  };

  return (
    <nav className={styles.navbar}
      style={{ backgroundColor: scrollPosition > 20 ? '#0f112e' : 'transparent' }}
    >
      <img src={logo} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />
      <ul>
        <li><button className={styles.navBtn} onClick={() => navigate('/')}>Home</button></li>
        <li><button className={styles.navBtn} disabled={!username} onClick={() => navigate('/community')}>Community</button></li>
        <li><button className={styles.navBtn} disabled={!username} onClick={() => navigate('/profile')}>Profile</button></li>
        <li><button className={styles.navBtn}>Contact Us</button></li>
      </ul>

      <ul>
        {isLoggedIn ? (
          <>
            <li className={styles.profileContainer}>
              <img src={profilePicture} alt="Profile" className={styles.profilePicture} />
              <span className={styles.username}>Welcome, {username}!</span>
            </li>
            <li><button className={styles.logoutBtn} onClick={handleLogout}>Log Out</button></li>
          </>
        ) : (
          <>
            <li><button className={styles.loginBtn} onClick={() => navigate('/login')}>Log In</button></li>
            <li><button className={styles.signupBtn} onClick={() => navigate('/signup')}>Sign Up</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
