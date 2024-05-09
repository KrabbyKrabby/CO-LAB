import React, { useEffect, useRef } from 'react'
import styles from '../components/CSS/CommunityCard.module.css';
import { useNavigate } from "react-router-dom";

const CommunityCard = ( {communityName, communityImageURL} ) => {

  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Initialize Vanilla Tilt for each element with the class name "ComCard"
  //   VanillaTilt.init(document.querySelectorAll('.' + styles.ComCard), {
  //     max: 25,
  //     speed: 400,
  //     glare: true,
  //     'max-glare': 0.5,
  //   });

  //   // Clean up the tilt effect when the component unmounts
  //   return () => {
  //     document.querySelectorAll('.' + styles.ComCard).forEach(element => {
  //       VanillaTilt.destroy(element);
  //     });
  //   };
  // }, []); // Run this effect only once after the component is mounted

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const slider = sliderRef.current;
  //     const windowHeight = window.innerHeight;
  //     const scrollPosition = window.scrollY + windowHeight;

  //     const sliderTop = slider.offsetTop;
  //     const sliderBottom = sliderTop + slider.offsetHeight;

  //     // Calculate the opacity based on scroll position
  //     const opacity = (scrollPosition - sliderTop) / (sliderBottom - sliderTop);

  //     // Set opacity to slider
  //     slider.style.opacity = opacity;
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup: Remove the scroll event listener when component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);



  return (
    <div className={styles.CommunityCardSlider} ref={sliderRef}>
    
      <div className={styles.ComCard}>
        <div className={styles.ComCardImg}>
          <img src={communityImageURL} alt="" className={styles.image2}/>
        </div>
        <div className={styles.ComCardContent}>
            <h3>{communityName}</h3>
            <p>
            Dive into our vibrant community where passionate individuals from diverse backgrounds converge to share insights and embark on a collective journey of discovery!
            </p>
            <button className={styles.click_here} onClick={() => navigate('/community_details')}>Click Here</button>
            {/* <a href='#'>Click here</a> */}
        </div>
      </div>
     
    </div>
  );
}

export default CommunityCard
