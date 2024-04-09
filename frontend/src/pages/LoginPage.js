import React from 'react'
import './CSS/LoginPage.css'
import Navbar from '../components/Navbar';
import LoginCard from '../components/LoginCard';


const HomePage = () => {
  return (
    <div className='LoginPageContainer'>
        <Navbar/>
        <LoginCard/>
    </div>
  );
}

export default HomePage