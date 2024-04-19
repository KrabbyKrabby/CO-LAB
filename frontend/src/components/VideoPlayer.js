import React from 'react';
import styles from './CSS/VideoPlayer.module.css';

const VideoPlayer = ({ videoLink }) => {
    if (!videoLink) {
        return null; // Return null if no videoLink is provided
    }
  // Extracting YouTube video ID from the link
  const videoId = videoLink.split('v=')[1];

  return (
    <div className={styles.videoContainer}>
      {videoId ? (
        <iframe
          className={styles.videoIframe}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
          title="YouTube Video Player"
        ></iframe>
      ) : (
        <p className={styles.errorMessage}>Invalid YouTube link</p>
      )}
    </div>
  );
};

export default VideoPlayer;
