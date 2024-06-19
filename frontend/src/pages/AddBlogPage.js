import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/AddBlogPage.module.css';
import Navbar from '../components/Navbar';

const communities = [
  'React',
  'Python',
  'Java',
];

const AddBlogPage = ({ isLoggedIn, username, addBlog, setCurrentBlog }) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [blogCommunity, setBlogCommunity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      blogTitle,
      blogDescription,
      blogUsername: username,
      blogCommunity
    };
    addBlog(newBlog);
    setCurrentBlog(newBlog)
    navigate('/blog_details');
  };

  const createBlog = async (blogData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Create Blog API called with:", blogData);
        resolve({ status: 201, data: { message: "Blog created successfully!" } });
      }, 500);
    });
  };

  return (
    <div className={styles.addBlogPage}>
      <Navbar isLoggedIn={isLoggedIn} username={username} />
      <form onSubmit={handleSubmit} className={styles.blogContainer}>
        <h1 className={styles.addBlog}>Add Blog</h1>
          <label>Title</label>
          <input type="text" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} className={styles.input} />
          <label>Description</label>
          <textarea value={blogDescription} onChange={(e) => setBlogDescription(e.target.value)} className={styles.textarea} />
          <label>Community</label>
          <select value={blogCommunity} onChange={(e) => setBlogCommunity(e.target.value)} className={styles.dropdown}>
            <option value="" disabled>Select Community</option>
            {communities.map((community, index) => (
              <option key={index} value={community}>{community}</option>
            ))}
          </select>
        <button type="submit" className={styles.submitButton}>Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlogPage;
