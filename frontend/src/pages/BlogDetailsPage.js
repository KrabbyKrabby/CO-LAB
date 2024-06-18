import React from 'react';
import styles from './CSS/BlogDetailsPage.module.css';
import Navbar from '../components/Navbar';

const BlogDetailsPage = ({ isLoggedIn, username, currentBlog }) => {
  if (!currentBlog) {
    return (
      <div className={styles.blogDetailsPage}>
        <Navbar isLoggedIn={isLoggedIn} username={username} />
        <p>No blog selected.</p>
      </div>
    );
  }

  return (
    <div className={styles.blogDetailsPage}>
      <Navbar isLoggedIn={isLoggedIn} username={username} />
      <div className={styles.blogCard}>
        <h3 className={styles.blogTitle}>{currentBlog.blogTitle}</h3>
        <p className={styles.blogDescription}>{currentBlog.blogDescription}</p>
        <p className={styles.blogUsername}>Written by: {currentBlog.blogUsername}</p>
        <p className={styles.blogCommunity}>Community: {currentBlog.blogCommunity}</p>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
