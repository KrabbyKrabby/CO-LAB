import React from 'react';
import style from './CSS/BlogCard.module.css';

const BlogCard = ({ title, description }) => {
    return (
        <div className={style.blog_card}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      );
}

export default BlogCard;