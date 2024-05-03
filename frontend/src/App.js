import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfileTab from './components/ProfileTab';
import EditProjectDetailsPage from './pages/EditProjectDetailsPage';
import MainUserPage from './pages/MainUserPage';
import ProjectDetails from './pages/ProjectDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectDetails/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<MainUserPage />} />
        <Route path="/editproject" element={<EditProjectDetailsPage />} />
        <Route path="/project_details" component={<ProjectDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
 