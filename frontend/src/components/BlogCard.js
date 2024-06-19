import React from 'react';
import style from './CSS/BlogCard.module.css';

const BlogCard = ({ title, description, onClick }) => {

  const updateBlog = async (blogId, blogData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Update Blog API called with:", blogId, blogData);
        resolve({ status: 200, data: { message: "Blog updated successfully!" } });
      }, 500);
    });
  };
  
    return (
        <div onClick={onClick} className={style.blog_card}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      );
}

export default BlogCard;