import React from 'react';
import styles from './CSS/CommunityPage.module.css';
import Navbar from '../components/Navbar';
import CommunityCard from '../components/CommunityCard';
import javaLogo from '../assets/java.png';
import djangoLogo from '../assets/java_logo.png';
import pythonLogo from '../assets/python_logo.png';
import reactLogo from '../assets/React_logo.png';
import cLogo from '../assets/Clogo.png';

const Mycommunities = [
  { communityName: "Python", communityImageURL: pythonLogo },
  { communityName: "Java", communityImageURL: javaLogo },
  { communityName: "React", communityImageURL: reactLogo },
];
const Othercommunities = [
  { communityName: "C/C++", communityImageURL: cLogo },
  { communityName: "Django", communityImageURL: djangoLogo },
];

const CommunityPage = ({ isLoggedIn, setIsLoggedIn, username, setUsername }) => {
  return (
    <div className={styles.CommunityPageContainer}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />

      <h3 className={styles.text}>Your Communities</h3>
      <div className={styles.community_card_container}>
        {Mycommunities.map((community, index) => (
          <CommunityCard
            key={index}
            communityName={community.communityName}
            communityImageURL={community.communityImageURL}
          />
        ))}
      </div>

      <h3 className={styles.text}>Other Communities</h3>
      <div className={styles.community_card_container}>
        {Othercommunities.map((community, index) => (
          <CommunityCard
            key={index}
            communityName={community.communityName}
            communityImageURL={community.communityImageURL}
            username={username}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
