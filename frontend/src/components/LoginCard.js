import React from 'react';
import styles from './CSS/LoginCard.module.css'; 

const LoginCard = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className={styles.login_card}>
      <form className={styles.login_form} onSubmit={handleLogin}>
        <h4>Username/Email</h4>
        <input type="text" id="username" />
        <h4>Password</h4>
        <input type="password" id="password" />
        <button type="submit" className={styles.login_button}>LOGIN</button>
      </form>
      <div className={styles.login_text}>
        Forgot Password? <a href="#" className={styles.login_link}>Click here :)</a>
      </div>
      <div className={styles.login_text}>
        Do not have account? <a href="#" className={styles.account_link}>Create an account!</a>
      </div>
    </div>
  );
};

export default LoginCard;
