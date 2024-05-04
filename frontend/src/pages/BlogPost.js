import React from 'react';
import style from './CSS/BlogPost.module.css'
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import TechStackInput from '../components/TechStackInput'; 


const BlogPost = () => {


  return (
    <div className={style.blogPostPage_container}>
        <Navbar/>
          <div className={style.BlogPost_card_container}>
              <ProfileCard title='Blog Title' ProfileInfo='The greatest blog ever written'/>
              <ProfileCard title='Tech Stack' TechStack={TechStackInput}/>
              <ProfileCard title='Description' ProfileInfo='It is the beginning of a great blog :3'/>
          </div>
    
        
    </div>
  );
}

export default BlogPost