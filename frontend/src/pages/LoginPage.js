import React from 'react';
import styles from './CSS/LoginPage.module.css';
import Navbar from '../components/Navbar';
import LoginCard from '../components/LoginCard';

const LoginPage = ({ setIsLoggedIn, isLoggedIn, username, setUsername, credentials }) => {
  return (
    <div className={styles.LoginPageContainer}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />
      <LoginCard setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} credentials={credentials} />
    </div>
  );
}

export default LoginPage;
