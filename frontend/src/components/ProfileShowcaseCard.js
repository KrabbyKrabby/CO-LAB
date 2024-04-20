import React, { useEffect, useRef } from 'react'
import styles from '../components/CSS/ProfileShowcaseCard.module.css'

const ProfileShowcaseCard = () => {

  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const slider = sliderRef.current;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight;

      const sliderTop = slider.offsetTop;
      const sliderBottom = sliderTop + slider.offsetHeight;

      // Calculate the opacity based on scroll position
      const opacity = (scrollPosition - sliderTop) / (sliderBottom - sliderTop);

      // Set opacity to slider
      slider.style.opacity = opacity;
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={styles.ProfileShowcaseCard} ref={sliderRef}>
      <div className={styles.ShowCardContent}>
            <h2>01</h2>
            <div className={styles.showcaseText}>
            Showcase your skills
            </div>
           
        </div>

        <div className={styles.ShowCardContent}>
            <h2>02</h2>
            <div className={styles.showcaseText}>
            Showcase your projects
            </div>
            
        </div>

        <div className={styles.ShowCardContent}>
            <h2>03</h2>
            <div className={styles.showcaseText}>
              Write intersting blogs
            </div>
            
        </div>
      
    </div>
  )
}

export default ProfileShowcaseCard
