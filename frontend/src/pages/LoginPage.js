import React from 'react'
import styles from './CSS/LoginPage.module.css'
import Navbar from '../components/Navbar';
import LoginCard from '../components/LoginCard';


const HomePage = () => {
  return (
    <div className={styles.LoginPageContainer}>
        <Navbar/>
        <LoginCard/>
    </div>
  );
}

export default HomePage