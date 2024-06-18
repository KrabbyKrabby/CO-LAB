import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/LoginCard.module.css';

const LoginCard = ({ setIsLoggedIn, setUsername, credentials }) => {
  const [localUsername, setLocalUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = credentials.find(
      (u) => u.username === localUsername && u.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      setUsername(localUsername);
      setLoginStatus('Login successful!');
      navigate('/');
    } else {
      setLoginStatus('Invalid username or password');
    }
  };

  return (
    <div className={styles.login_card}>
      <form className={styles.login_form} onSubmit={handleLogin}>
        <h4>Username/Email</h4>
        <input
          type="text"
          id="username"
          value={localUsername}
          onChange={(e) => setLocalUsername(e.target.value)}
        />
        <h4>Password</h4>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.login_button}>LOGIN</button>
      </form>
      <div className={styles.login_text}>
        {loginStatus}
      </div>
      <div className={styles.login_text}>
        Forgot Password? <a href="#" className={styles.login_link}>Click here :)</a>
      </div>
      <div className={styles.login_text}>
        Do not have an account? 
        <a href="#" className={styles.account_link} onClick={() => navigate('/signup')}>
          Create an account!
        </a>
      </div>
    </div>
  );
};

export default LoginCard;
