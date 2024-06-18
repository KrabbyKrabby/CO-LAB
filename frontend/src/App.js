import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfileTab from './components/ProfileTab';
import EditProjectDetailsPage from './pages/EditProjectDetailsPage';
import MainUserPage from './pages/MainUserPage';
import ProjectDetails from './pages/ProjectDetails';
import CommunityPage from './pages/CommunityPage';
import CommunityDetailsPage from './pages/CommunityDetailsPage';
import AddBlogPage from './pages/AddBlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import BlogPost from './pages/BlogPost';
import Navbar from './components/Navbar';
import project1_1 from './assets/ProjectScreenshots/project1-1.jpeg';
import project1_2 from './assets/ProjectScreenshots/project1-2.jpeg';
import project1_3 from './assets/ProjectScreenshots/project1-3.jpeg';
import project2_1 from './assets/ProjectScreenshots/project2-1.png';
import project2_2 from './assets/ProjectScreenshots/project2-2.png';
import project2_3 from './assets/ProjectScreenshots/project2-3.png';
import project3_1 from './assets/ProjectScreenshots/project3-1.jpeg'
import project3_2 from './assets/ProjectScreenshots/project3-2.jpeg'
import project3_3 from './assets/ProjectScreenshots/project3-3.png'


const initialCredentials = [
  { username: 'ittehad', password: 'secret' },
  { username: 'akib', password: 'secret' }
];

const initialProjects = [
  {
    projectUsername: 'ittehad',
    projectCommunity: 'Community1',
    projectName: 'Project 1',
    projectDescription: 'Description of Project 1',
    projectFeatures: 'Feature 1, Feature 2',
    projectGitHubLink: 'https://github.com/riadath/csedu',
    projectVideoLink: 'https://www.youtube.com/watch?v=COQg5aQQSKY&t=204s',
    projectCommunity: 'React',
    images: [
      { url: project1_1, name: 'Image 1' },
      { url: project1_2, name: 'Image 2' },
      { url: project1_3, name: 'Image 3' }
    ],
    techStack: ['React', 'Node.js']
  },
  {
    projectUsername: 'akib',
    projectCommunity: 'Community2',
    projectName: 'Project 2',
    projectDescription: 'Description of Project 2',
    projectFeatures: 'Feature 3, Feature 4',
    projectGitHubLink: 'https://github.com/user2/project2',
    projectVideoLink: 'https://youtube.com/video2',
    projectCommunity: 'Python',
    images: [
      { url: project2_1, name: 'Image 1' },
      { url: project2_2, name: 'Image 2' },
      { url: project2_3, name: 'Image 3' }
    ],
    techStack: ['Django', 'Python']
  },
  {
    projectUsername: 'sami',
    projectCommunity: 'Community3',
    projectName: 'Project 3',
    projectDescription: 'Description of Project 3',
    projectFeatures: 'Feature 5, Feature 6',
    projectGitHubLink: 'https://github.com/user3/project3',
    projectVideoLink: 'https://youtube.com/video3',
    projectCommunity: 'Java',
    images: [
      { url: project3_1, name: 'Image 1' },
      { url: project3_2, name: 'Image 2' },
      { url: project3_3, name: 'Image 3' }
    ],
    techStack: ['Spring Boot', 'Java']
  },
];


const initialBlogs = [
  {
    blogTitle: 'Blog 1',
    blogDescription: 'Description of Blog 1',
    blogUsername: 'ittehad',
    blogCommunity: 'React'
  },
  {
    blogTitle: 'Blog 2',
    blogDescription: 'Description of Blog 2',
    blogUsername: 'akib',
    blogCommunity: 'Python'
  }
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [credentials, setCredentials] = useState(initialCredentials);
  const [projects, setProjects] = useState(initialProjects);
  const [currentProject, setCurrentProject] = useState(initialProjects[0]);
  const [blogs, setBlogs] = useState(initialBlogs);
  const [currentBlog, setCurrentBlog] = useState(initialBlogs[0]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };


  const updateProject = (updatedProject) => {
    setProjects((prevProjects) => {
      // Check if the project exists
      const projectExists = prevProjects.some(
        (project) => project.projectName === updatedProject.projectName
      );
  
      if (projectExists) {
        // Update existing project
        return prevProjects.map((project) =>
          project.projectName === updatedProject.projectName ? updatedProject : project
        );
      } else {
        // Append new project to the list
        return [...prevProjects, updatedProject];
      }
    });
  
    setCurrentProject(updatedProject); // Update the current project as well
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername}/>} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} credentials={credentials} />} />
        <Route path="/signup" element={<SignupPage setCredentials={setCredentials} />} />
        <Route path="/profile" element={<MainUserPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} projects={projects} setProjects={setProjects} setCurrentProject={setCurrentProject} blogs = {blogs} setCurrentBlog={setCurrentBlog} />} />
        <Route path="/project_details" element={<ProjectDetails isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} currentProject={currentProject} updateProject={updateProject} />} />
        <Route path="/community" element={<CommunityPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} projects={projects} />} />
        <Route path='/blog_post' element={<BlogPost isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} projects={projects} setProjects={setProjects} setCurrentProject={setCurrentProject} />} />
        <Route path='/community_details' element={<CommunityDetailsPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} projects={projects} setCurrentProject={setCurrentProject} blogs = {blogs} setCurrentBlog={setCurrentBlog} />} />
        <Route path="/add_blog" element={<AddBlogPage isLoggedIn={isLoggedIn} username={username} addBlog={addBlog} setCurrentBlog={setCurrentBlog} />} />
        <Route path="/blog_details" element={<BlogDetailsPage isLoggedIn={isLoggedIn} username={username} currentBlog={currentBlog} />} />
      </Routes>
    </Router>
  );
}

export default App;
