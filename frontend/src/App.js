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
import data from './data/initial.json';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [credentials, setCredentials] = useState(data.initialCredentials);
  const [projects, setProjects] = useState(data.initialProjects);
  const [currentProject, setCurrentProject] = useState(data.initialProjects[0]);
  const [blogs, setBlogs] = useState(data.initialBlogs);
  const [currentBlog, setCurrentBlog] = useState(data.initialBlogs[0]);

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
