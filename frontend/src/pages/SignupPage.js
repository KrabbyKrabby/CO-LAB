import React from 'react';
import Navbar from '../components/Navbar'; 
import SignupCard from '../components/SignupCard';
import styles from './CSS/SignupPage.module.css'; 

const SignupPage = () => {
  return (
    <div className={styles.signup_page_container}>
      <Navbar/>
      <SignupCard/>
    </div>
  );
}

export default SignupPage;
