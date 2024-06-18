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
    projectName: 'CSEDU App',
    projectDescription: 'CSEDU App is a comprehensive platform for university students. It provides a centralized hub for managing student profiles, accessing study materials, and organizing class routines.',
    projectFeatures: `The CSEDU App includes detailed student profiles with all relevant information, ensuring easy access to personal and academic details. The study section is rich with past questions and resources, supporting students in their academic preparation.`,
    projectGitHubLink: 'https://www.youtube.com/watch?v=2OyjCgY3Q_E',
    projectVideoLink: 'https://www.youtube.com/watch?v=2OyjCgY3Q_E',
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
    projectName: 'Project 2',
    projectDescription: 'Project Z is an engaging arcade game that brings together the excitement of four classic games: Pacman, Icy Tower, Running Man, and Catch the Ball. This combination creates a fun and addictive experience for players of all ages. Developed using C++ and SDL, Project Z offers smooth gameplay and vibrant graphics.',
    projectFeatures: 'Project Z incorporates the maze-chasing thrill of Pacman, the vertical jumping challenge of Icy Tower, the fast-paced running action of Running Man, and the precision-based catching mechanics of Catch the Ball. ',
    projectGitHubLink: 'https://github.com/user2/project2',
    projectVideoLink: 'https://www.youtube.com/watch?v=2OyjCgY3Q_E',
    projectCommunity: 'Python',
    images: [
      { url: project2_1, name: 'Image 1' },
      { url: project2_2, name: 'Image 2' },
      { url: project2_3, name: 'Image 3' }
    ],
    techStack: ['Django', 'Python']
  },
  {
    projectUsername: 'ittehad',
    projectName: 'CO-Lab',
    projectDescription: 'Co Lab is a web application designed to provide a collaborative platform where users can share their projects, engage with communities, and contribute to blogs. The platform aims to foster collaboration and knowledge sharing among users, creating a vibrant environment for project showcase and community interaction.',
    projectFeatures: 'Co Lab allows users to share their projects with detailed descriptions, join various communities to engage in discussions and collaborations, and contribute to blogs to share insights and updates. The platform includes comprehensive user profiles, advanced search and filter options, and a streamlined interface to enhance user experience and interaction.',
    projectGitHubLink: 'https://github.com/user3/project3',
    projectVideoLink: 'https://www.youtube.com/watch?v=ZK-rNEhJIDs',
    projectCommunity: 'Python',
    images: [
      { url: project3_1, name: 'Image 1' },
      { url: project3_2, name: 'Image 2' },
      { url: project3_3, name: 'Image 3' }
    ],
    techStack: ['React', 'Python', 'Django']
  },
];


const initialBlogs = [
  {
    blogTitle: 'Exploring the Power of React: A Modern Frontend Library',
    blogDescription: " A Modern Frontend Library React has emerged as one of the most popular and widely-used libraries for building user interfaces. Developed and maintained by Facebook, React allows developers to create large web applications that can change data without reloading the page. Its main goal is to be fast, scalable, and simple. React achieves this by using a virtual DOM to efficiently update and render components. By breaking down the UI into reusable components, developers can manage and maintain their codebase more effectively, making React an ideal choice for complex, dynamic web applications.One of the key features that set React apart from other libraries is its component-based architecture. Each component in a React application encapsulates its logic and structure, allowing developers to build modular and maintainable code. This modularity also fosters collaboration among teams, as different developers can work on separate components simultaneously without causing conflicts. React's component lifecycle methods provide hooks to run code at specific points in a component's life, giving developers precise control over their application's behavior. React also benefits from a rich ecosystem of tools and libraries that enhance its functionality and streamline the development process. For instance, React Router facilitates the creation of single-page applications with dynamic routing, while state management libraries like Redux and Context API help manage and share state across the application. Additionally, tools like Create React App simplify the setup process, enabling developers to focus on writing code rather than configuring build systems. With a strong community and continuous contributions, React is continually evolving, ensuring it remains at the forefront of modern web development.",
    blogUsername: 'ittehad',
    blogCommunity: 'React'
  },
  {
    blogTitle: 'Exploring the Power of Python: A Versatile Programming Language',
    blogDescription: " A Versatile Programming Language Python has established itself as one of the most popular and versatile programming languages in the world. Known for its simplicity and readability, Python is an ideal language for beginners and experienced developers alike. Its straightforward syntax allows programmers to express concepts in fewer lines of code compared to other languages like Java or C++. This ease of use, combined with a vast standard library, makes Python suitable for a wide range of applications, from web development and data analysis to artificial intelligence and scientific computing. One of the standout features of Python is its extensive ecosystem of libraries and frameworks. For web development, frameworks like Django and Flask provide powerful tools for building robust and scalable web applications. In the realm of data science and machine learning, libraries such as NumPy, pandas, and TensorFlow offer comprehensive functionalities for data manipulation, statistical analysis, and predictive modeling. Python's integration capabilities also make it a preferred language for automation and scripting, allowing developers to automate repetitive tasks and streamline workflows efficiently.Python's active and supportive community further enhances its appeal. The Python Software Foundation and countless developers worldwide contribute to the language's continuous improvement and expansion. This collaborative environment ensures that Python remains up-to-date with the latest technological advancements and industry trends. Additionally, the abundance of tutorials, documentation, and open-source projects available online makes it easy for new learners to get started and for seasoned developers to find solutions to complex problems. With its adaptability and strong community backing, Python is poised to remain a dominant force in the programming world for years to come.",
    blogUsername: 'akib',
    blogCommunity: 'Python'
  },
  {
    blogTitle: 'FastAPI: The High-Performance Web Framework for Modern APIs',
    blogDescription: "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. It is one of the fastest Python frameworks available today, capable of handling thousands of concurrent connections with ease. FastAPI is designed to be easy to use and offers automatic interactive API documentation, making it an excellent choice for building robust and efficient APIs quickly. Its performance is on par with Node.js and Go, thanks to its asynchronous capabilities, and it leverages the power of Python's async and await syntax to achieve this.One of the key features of FastAPI is its ability to automatically generate OpenAPI and JSON Schema documentation for your APIs. This is incredibly useful for developers, as it ensures that the API is well-documented and easy to understand. FastAPI uses Python's type annotations to validate and serialize request and response data, which reduces the amount of boilerplate code and improves code clarity. Additionally, it provides out-of-the-box support for OAuth2.0 and other authentication mechanisms, making it easier to implement secure APIs.FastAPI also boasts an active and growing community, which contributes to its ecosystem by creating extensions and third-party libraries that further enhance its capabilities. The framework is designed to be highly modular, allowing developers to plug in various components as needed. This makes it an excellent choice for projects ranging from simple APIs to complex, data-driven applications. The ease of deployment with FastAPI, coupled with its performance and comprehensive feature set, makes it a compelling option for developers looking to build high-performance APIs in Python.",
    blogUsername: 'ittehad',
    blogCommunity: 'Python'
  },
  {
    blogTitle: 'Java: The Versatile Powerhouse for Enterprise Applications',
    blogDescription: "Java, a programming language and computing platform first released by Sun Microsystems in 1995, remains one of the most widely used and enduring languages in the software development world. Known for its robustness, security, and portability across platforms, Java has been the backbone of countless enterprise applications. Its write once, run anywhere capability means that Java applications are compiled into bytecode that can run on any device equipped with the Java Virtual Machine (JVM), ensuring broad compatibility and reducing development time.One of the standout features of Java is its comprehensive standard library, which provides a wide range of ready-to-use functionalities that simplify the development process. This library includes utilities for data structures, networking, file I/O, and much more. Java's strong memory management, which relies on automatic garbage collection, helps developers avoid common pitfalls such as memory leaks, making it an ideal choice for building large-scale applications. Furthermore, Java's static type system, which performs type checking at compile-time, catches potential errors early in the development process, enhancing code reliability and maintainability.The Java ecosystem is supported by a vast array of tools and frameworks that further empower developers. Frameworks such as Spring and Hibernate streamline the development of web applications and enterprise services, promoting best practices and reducing boilerplate code. Additionally, Java's integration with modern development tools and environments, such as IntelliJ IDEA and Eclipse, enhances productivity through features like code refactoring, debugging, and version control integration. The language's robust community and continuous evolution, including the recent introduction of Java 17 with its new features and performance improvements, ensure that Java remains relevant and powerful for tackling modern software development challenges.Java also plays a crucial role in Android development, powering the majority of mobile applications on the world's most popular mobile operating system. The language's object-oriented nature and extensive ecosystem make it an excellent choice for building scalable, high-performance applications that can handle the demands of modern mobile users. With its versatility, reliability, and extensive support, Java continues to be a preferred choice for developers aiming to build secure, efficient, and maintainable software solutions.",
    blogUsername: 'akib',
    blogCommunity: 'React'
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
