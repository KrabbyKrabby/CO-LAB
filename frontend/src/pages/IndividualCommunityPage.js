import React from 'react'
import styles from './CSS/IndividualCommunityPage.module.css'
import Navbar from '../components/Navbar';
import CommunityCard from '../components/CommunityCard';
import javaLogo from '../assets/java_logo.png'
import pythonLogo from '../assets/python_logo.png'
import reactLogo from '../assets/React_logo.png'
import ProfileTab from '../components/ProfileTab';
import CommunityHeading from '../components/CommunityHeading';



const IndividualCommunityPage = ({ isLoggedIn, setIsLoggedIn, username, setUsername }) => {
    return (
      <div className={styles.CommunityPageContainer}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />

          < CommunityHeading/>
      </div>
    );
}

export default IndividualCommunityPage