import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState(""); // Store user input (email)
  const [password, setPassword] = useState(""); // Store password input
  const navigate = useNavigate(); // React Router navigation function

  // Fake user database (replace with real authentication later)
  const userDatabase = {
    "student": { role: "student", password: "1234", path: "/student_dashboard" },
    "tutor": { role: "tutor", password: "1234", path: "/formtutor_dashboard" },
    "teacher": { role: "teacher", password: "1234", path: "/teacher_dashboard" },
    "admin": { role: "admin", password: "1234", path: "/admin_dashboard" }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if the entered email exists in our database
    if (userDatabase[email] && userDatabase[email].password === password) {
      // If login is correct, navigate to the corresponding dashboard
      navigate(userDatabase[email].path);
    } else {
      alert("Invalid login credentials!"); // Show alert if login fails
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Welcome to Academia360</h2>
          <header>Login</header>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-submit">
            <button type="submit" className="submit-btn">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
