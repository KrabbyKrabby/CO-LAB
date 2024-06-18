import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/BlogDetailsPage.module.css';
import Navbar from '../components/Navbar';

const BlogDetailsPage = ({ isLoggedIn, username, currentBlog }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
  };

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
        {currentBlog.blogUsername === username && (
          <button className={styles.editButton} onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
