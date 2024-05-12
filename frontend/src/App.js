import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfileTab from './components/ProfileTab';
import EditProjectDetailsPage from './pages/EditProjectDetailsPage';
import MainUserPage from './pages/MainUserPage';
import ProjectDetails from './pages/ProjectDetails'
import Communitypage from './pages/CommunityPage'
import CommunityDetailsPage from './pages/CommunityDetailsPage'
import BlogPost from './pages/BlogPost';
// import image1 from './assets/Ellipse 1.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<MainUserPage />} />
        <Route path="/editproject" element={<EditProjectDetailsPage />} />
        <Route path="/project_details" element={<ProjectDetails/>} />
        <Route path="/community" element={<Communitypage/>} />
        <Route path="/project_details" element={<ProjectDetails/>} />
        <Route path='/blog_post' element={<BlogPost/>} />
        <Route path='/community_details' element={<CommunityDetailsPage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
 