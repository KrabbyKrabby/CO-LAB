import React from 'react';
import styles from './CSS/SignupCard.module.css';

const SignupCard = () => {
  const handleSignup = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className={styles.signup_card}>
      <form className={styles.signup_form} onSubmit={handleSignup}>
        <h4>Full Name</h4>
        <input type="text" id="fullName" />

        <h4>Email</h4>
        <input type="email" id="email" />

        <h4>Username</h4>
        <input type="text" id="username" />

        <h4>Registration Number</h4>
        <input type="text" id="registrationNumber" />

        <h4>Date of Birth</h4>
        <input type="date" id="dateOfBirth" />

        <h4>Batch</h4>
        <input type="text" id="batch" />

        <h4>Password</h4>
        <input type="password" id="password" />

        <h4>Confirm Password</h4>
        <input type="password" id="confirmPassword" />

        <button type="submit" className={styles.signup_button}>SIGN UP</button>
      </form>
    </div>
  );
};

export default SignupCard;
