import React from 'react';
import './CSS/SignupCard.css'; // Make sure this CSS file exists

const SignupCard = () => {
  const handleSignup = (event) => {
    event.preventDefault();
    // Implement your signup logic here
  };

  return (
    <div className="signup-card">
      <form className="signup-form" onSubmit={handleSignup}>
        <h3>Full Name</h3>
        <input type="text" id="fullName" />

        <h3>Email</h3>
        <input type="email" id="email" />

        <h3>Username</h3>
        <input type="text" id="username" />

        <h3>Registration Number</h3>
        <input type="text" id="registrationNumber" />

        <h3>Date of Birth</h3>
        <input type="date" id="dateOfBirth" />

        <h3>Batch</h3>
        <input type="text" id="batch" />

        <h3>Password</h3>
        <input type="password" id="password" />

        <h3>Confirm Password</h3>
        <input type="password" id="confirmPassword" />

        <button type="submit" className="signup-button">SIGN UP</button>
      </form>
    </div>
  );
};

export default SignupCard;
