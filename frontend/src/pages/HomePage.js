import React from 'react'
import styles from './CSS/HomePage.module.css'
import image1 from '../assets/lets build together text.png'
import image2 from '../assets/Saly-13.png'
import arrow from '../assets/arrow_sign.png'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
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
    </div>
  );
}

export default HomePage
