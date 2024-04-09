import React from 'react';
import Navbar from '../components/Navbar'; // Assume Navbar is a component you have
import SignupCard from '../components/SignupCard';
import './CSS/SignupPage.css'; // Make sure to create this CSS file

const SignupPage = () => {
  return (
    <div className="signup-page-container">
      <Navbar/>
      <SignupCard/>
    </div>
  );
}

export default SignupPage;
