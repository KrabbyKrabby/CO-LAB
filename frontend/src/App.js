import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfileTab from './components/ProfileTab';
import EditProjectDetailsPage from './pages/EditProjectDetailsPage';
import MainUserPage from './pages/MainUserPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<MainUserPage />} />
        <Route path="/editproject" element={<EditProjectDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
 