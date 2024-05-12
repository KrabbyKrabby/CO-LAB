import React, { useEffect, useState } from 'react'
import styles from './CSS/HomePage.module.css'
import image1 from '../assets/lets build together text.png'
import image2 from '../assets/Saly-13.png'
import arrow from '../assets/arrow_sign.png'
import Navbar from '../components/Navbar';
import CommunityCard from '../components/CommunityCard'
import image3 from '../assets/Saly-10.png'
import image4 from '../assets/showcase your project text.png'
import ProfileShowcaseCard from '../components/ProfileShowcaseCard'
import javaLogo from '../assets/java_logo.png'
import pythonLogo from '../assets/python_logo.png'
import reactLogo from '../assets/React_logo.png'
// import MorphingBackground from '../components/Background'

const HomePage = () => {

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition1 = window.scrollY;
            const revealPoint1 = window.innerHeight / 0.95; 
            
            if (scrollPosition1 > revealPoint1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <div className={styles.homePage}>

      <Navbar/>
      {/* <MorphingBackground/> */}
      


      <div className={styles.imagesContainer1}>
        <img src={image1} alt="" className={styles.image1}/>
        <img src={image2} alt="" className={styles.image2}/>
      </div>

      <div className={styles.buttonContainer}>
        {/* # TODO link to community / profile page */}
        <button className={styles.btn}>
          Explore more
          <img src={arrow} alt=''/>
          </button>
      </div>

      <div className={styles.CommunityPreview}>
        {/*  TODO link communities , also show top 3 popular community cards */}
        <h3>Join Communities</h3>
        <div className={styles.community_card_container}>
          <CommunityCard communityName="Python Community" communityImageURL={pythonLogo}/>
          <CommunityCard communityName="Java Community" communityImageURL={javaLogo}/>
          <CommunityCard communityName="React Community" communityImageURL={reactLogo}/>
        </div>
      </div>

      <div className={`${styles.imagesContainer2} ${isScrolled ? styles.reveal : ''}`}>
        <img src={image3} alt="" className={`${styles.image3} ${isScrolled ? styles.reveal : ''}`} />
        <img src={image4} alt="" className={`${styles.image4} ${isScrolled ? styles.reveal : ''}`} />
      </div>

      <div className={styles.ProfilePreview}>
        <ProfileShowcaseCard/>
      </div>
      
    </div>
  );
}

export default HomePage

