import React from 'react';
import './CSS/ProfileTab.css'; // Make sure to have this CSS file in the right path
import profilePicture from '../assets/profilepicture.png'; // Adjust path as needed
import starIcon from '../assets/star.png'; // Adjust path as needed
import peopleIcon from '../assets/twopeople.png'; // Adjust path as needed

const ProfileTab = () => {
    return (
      <div className="profile-tab">
        <div className="profile-info">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          <div className="name-and-buttons">
            <div className='profile-tab-top'>
              <h1 className="profile-name">Harry Potter</h1>
              <img src={starIcon} alt="Star" className="icon" />
              <img src={peopleIcon} alt="People" className="icon" />
            </div>
            <div className="profile-buttons">
              <button className="tab-button">Profile Overview</button>
              <button className="tab-button">Projects</button>
              <button className="tab-button">Blogs</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileTab;
