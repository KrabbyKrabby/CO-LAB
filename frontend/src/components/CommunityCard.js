import React, { useRef } from 'react';
import styles from '../components/CSS/CommunityCard.module.css';
import { useNavigate } from 'react-router-dom';

const CommunityCard = ({ communityName, communityImageURL, username }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    if (username) {
      navigate('/community_details', { state: { communityName, communityImageURL } });
    }
  };

  return (
    <div className={styles.CommunityCardSlider} ref={sliderRef}>
      <div className={styles.ComCard}>
        <div className={styles.ComCardImg}>
          <img src={communityImageURL} alt="" className={styles.image2} />
        </div>
        <div className={styles.ComCardContent}>
          <h3>{communityName} Community</h3>
          <button
            className={styles.click_here}
            onClick={handleClick}
            disabled={!username}
          >
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
