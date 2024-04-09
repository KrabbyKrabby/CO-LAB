import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfileTab from './components/ProfileTab';

function App() {
  return (
    <div className="App">
      <ProfileTab/>
     <SignupPage/>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
 