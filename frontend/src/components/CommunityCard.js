import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';
import styles from '../components/CSS/CommunityCard.module.css';
import image1 from '../assets/React_logo.png'
import image2 from '../assets/python_logo.png'
import image3 from '../assets/java_logo.png'

const CommunityCard = () => {

  useEffect(() => {
    // Initialize Vanilla Tilt for each element with the class name "ComCard"
    VanillaTilt.init(document.querySelectorAll('.' + styles.ComCard), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });

    // Clean up the tilt effect when the component unmounts
    return () => {
      document.querySelectorAll('.' + styles.ComCard).forEach(element => {
        VanillaTilt.destroy(element);
      });
    };
  }, []); // Run this effect only once after the component is mounted

  return (
    <div className={styles.CommunityCardSlider}>
      <div className={styles.ComCard}>
        <div className={styles.ComCardImg}>
          <img src={image1} alt="" className={styles.image1}/>
        </div>
        <div className={styles.ComCardContent}>
            <h3>React Community</h3>
            <p>
            Dive into our vibrant community where passionate individuals from diverse backgrounds converge to share insights and embark on a collective journey of discovery!
            </p>
            <a href='#'>Click here</a>
        </div>
      </div>

      <div className={styles.ComCard}>
      <div className={styles.ComCardImg}>
          <img src={image2} alt="" className={styles.image2}/>
        </div>
        <div className={styles.ComCardContent}>
            <h3>Python Community</h3>
            <p>
            Dive into our vibrant community where passionate individuals from diverse backgrounds converge to share insights and embark on a collective journey of discovery!
            </p>
            <a href='#'>Click here</a>
        </div>
      </div>

      <div className={styles.ComCard}>
      <div className={styles.ComCardImg}>
          <img src={image3} alt="" className={styles.image3}/>
        </div>
        <div className={styles.ComCardContent}>
            <h3>Django Community</h3>
            <p>
            Dive into our vibrant community where passionate individuals from diverse backgrounds converge to share insights and embark on a collective journey of discovery!
            </p>
            <a href='#'>Click here</a>
        </div>
      </div>

     
    </div>
  );
}

export default CommunityCard