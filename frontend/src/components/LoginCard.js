import React from 'react';
import './CSS/LoginCard.css'; // Import the CSS stylesheet

const LoginCard = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Implement your login logic here
  };

  return (
    <div className="login-card">
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" id="username" placeholder="Username / Email" />
        <input type="password" id="password" placeholder="Password" />
        <button type="submit" className="login-button">LOGIN</button>
      </form>
      <div className="login-text">
        Forgot Password? <a href="#" className="login-link">Click here :)</a>
      </div>
      <div className="login-text">
        Do not have account? <a href="#" className="account-link">Create an account!</a>
      </div>
    </div>
  );
};

export default LoginCard;