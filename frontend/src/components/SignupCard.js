import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/SignupCard.module.css';

const SignupCard = ({ setCredentials }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [batch, setBatch] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Add new user to the credentials list
    setCredentials(prevCredentials => [
      ...prevCredentials,
      { username, password }
    ]);

    // Navigate to login page
    navigate('/login');
  };

  return (
    <div className={styles.signup_card}>
      <form className={styles.signup_form} onSubmit={handleSignup}>
        <h4>Full Name</h4>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <h4>Email</h4>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h4>Username</h4>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h4>Registration Number</h4>
        <input
          type="text"
          id="registrationNumber"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />

        <h4>Date of Birth</h4>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <h4>Batch</h4>
        <input
          type="text"
          id="batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />

        <h4>Password</h4>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <h4>Confirm Password</h4>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className={styles.signup_button}>SIGN UP</button>
      </form>
      <div className={styles.login_text}>
        Already have an account? 
        <a href="#" className={`${styles.login_link} ${styles.account_link}`} onClick={() => navigate('/login')}>
          Login
        </a>
      </div>
    </div>
  );
};

export default SignupCard;
