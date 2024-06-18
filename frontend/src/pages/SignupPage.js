import React from 'react';
import Navbar from '../components/Navbar'; 
import SignupCard from '../components/SignupCard';
import styles from './CSS/SignupPage.module.css'; 

const SignupPage = ({ isLoggedIn, setIsLoggedIn, username, setUsername, setCredentials }) => {
  return (
    <div className={styles.signup_page_container}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />

      <SignupCard setCredentials = {setCredentials}/>
    </div>
  );
}

export default SignupPage;
