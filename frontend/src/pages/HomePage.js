import React from 'react'
import styles from './CSS/HomePage.module.css'
import image1 from '../assets/lets build together text.png'
import image2 from '../assets/Saly-13.png'
import arrow from '../assets/arrow_sign.png'
import Navbar from '../components/Navbar';
import CommunityCard from '../components/CommunityCard'
import image3 from '../assets/Saly-10.png'
import image4 from '../assets/showcase your project text.png'
import ProfileShowcaseCard from '../components/ProfileShowcaseCard'

const HomePage = () => {
  return (
    <div className={styles.homePage}>

      <Navbar/>

      <div className={styles.imagesContainer}>
        <img src={image1} alt="" className={styles.image1}/>
        <img src={image2} alt="" className={styles.image2}/>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.btn}>
          Explore more
          <img src={arrow} alt=''/>
          </button>
      </div>

      <div className={styles.CommunityPreview}>
        <h3>Join Communities</h3>
        <CommunityCard/>
      </div>

      <div className={styles.imagesContainer}>
        <img src={image3} alt="" className={styles.image3}/>
        <img src={image4} alt="" className={styles.image4}/>
      </div>

      <div className='{styles.ProfilePreview'>
        <ProfileShowcaseCard/>
      </div>
      
    </div>
  );
}

export default HomePage
