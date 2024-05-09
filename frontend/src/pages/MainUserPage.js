import React, { useState } from 'react';
import style from './CSS/MainUserPage.module.css'
import Navbar from '../components/Navbar';
import ProfileTab from '../components/ProfileTab';
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';
import ProfileCard from '../components/ProfileCard';
import TechStackInput from '../components/TechStackInput'; 

const MainUserPage = () => {

  const [selectedTab, setSelectedTab] = useState(1);
  const[selectedTechStack, setTechStack] = useState(['React', 'Node']);
  const[canEdit, setCanEdit] = useState(false);

  function hadleEdit(){
    setCanEdit(!canEdit);
  }

  const TechStackInputWithProps = () => (
    <TechStackInput selectedTechStack={selectedTechStack} setTechStack={setTechStack} canEdit={canEdit}/>
  );
  

  function doesNothing(){
    
  }

  return (
    <div className={style.mainuserpage_container}>
        <Navbar/>
        <ProfileTab onTabSelect={setSelectedTab} selectedTab={selectedTab}/>

        {selectedTab === 1 && (
          <div className={style.profile_card_container}>
              <ProfileCard title='Bio' ProfileInfo='Hello I am great' handleEdit={doesNothing} />
              <ProfileCard title='Tech Stack' TechStack={TechStackInputWithProps} handleEdit={hadleEdit}/>
              <ProfileCard title='Experience' ProfileInfo='Hello I am great' handleEdit={doesNothing}/>
          </div>
        )}

        {selectedTab === 2 && (
          <div className={style.project_card_container}>
              <ProjectCard title='Project 1' description='Project Description 1'/>
              <ProjectCard title='Project 2' description='Project Description 2'/>
              <ProjectCard title='Project 3' description='Project Description 3'/>
              <ProjectCard title='Project 4' description='Project Description 4'/>
          </div>
        )}

        {selectedTab === 3 && (
          <div className={style.blog_card_container}>
              <BlogCard title='Blog Title 1' description='Blog Description 1'/>
              <BlogCard title='Blog Title 2' description='Blog Description 2'/>
              <BlogCard title='Blog Title 3' description='Blog Description 3'/>
              <BlogCard title='Blog Title 4' description='Blog Description 4'/>
          </div>
        )}  
    </div>
  );
}

export default MainUserPage