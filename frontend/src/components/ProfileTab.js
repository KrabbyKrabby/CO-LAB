import React from 'react';
import styles from  './CSS/ProfileTab.module.css'; // Make sure to have this CSS file in the right path
import profilePicture from '../assets/profilepicture.png'; // Adjust path as needed
import starIcon from '../assets/star.png'; // Adjust path as needed
import peopleIcon from '../assets/twopeople.png'; // Adjust path as needed

const ProfileTab = ({ onTabSelect,selectedTab }) => {
    return (
      <div className={styles.profile_tab}>
        <div className={styles.profile_info}>
          <img src={profilePicture} alt="Profile" className={styles.profile_picture} />
          <div className={styles.name_and_buttons}>
            <div className={styles.profile_tab_top}>
              <h1 className={styles.profile_name}>Harry Potter</h1>
              <img src={starIcon} alt="Star" className={styles.icon} />
              <img src={peopleIcon} alt="People" className={styles.icon} />
            </div>
            <div className={styles.profile_buttons}>
              <button className={`${styles.tab_button} ${selectedTab === 1 ? styles.selected : ''}`} onClick={() => onTabSelect(1)}>Profile Overview</button>
              <button className={`${styles.tab_button} ${selectedTab === 2 ? styles.selected : ''}`} onClick={() => onTabSelect(2)}>Projects</button>
              <button className={`${styles.tab_button} ${selectedTab === 3 ? styles.selected : ''}`} onClick={() => onTabSelect(3)}>Blogs</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileTab;
