import React from 'react'
import styles from './CSS/CommunityPage.module.css'
import Navbar from '../components/Navbar';
import CommunityCard from '../components/CommunityCard';
import javaLogo from '../assets/java_logo.png'
import pythonLogo from '../assets/python_logo.png'
import reactLogo from '../assets/React_logo.png'


const CommunityPage = () => {
  return (
    <div className={styles.CommunityPageContainer}>
        <Navbar/>
        <div className={styles.CommunityPreview}>
        {/*  TODO link communities , also show top 3 popular community cards */}
        <h3>Your Communities</h3>
        <div className={styles.community_card_container}>
          <CommunityCard communityName="Python Community" communityImageURL={pythonLogo}/>
          <CommunityCard communityName="Java Community" communityImageURL={javaLogo}/>
          <CommunityCard communityName="React Community" communityImageURL={reactLogo}/>
        </div>
      </div>
      <div className={styles.CommunityPreview}>
        {/*  TODO link communities , also show top 3 popular community cards */}
        <h3>Other Communities</h3>
        <div className={styles.community_card_container}>
          <CommunityCard communityName="Python Community" communityImageURL={pythonLogo}/>
          <CommunityCard communityName="Java Community" communityImageURL={javaLogo}/>
          <CommunityCard communityName="React Community" communityImageURL={reactLogo}/>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage