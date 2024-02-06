// src/Login.js
import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css"; // Import the CSS file
import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const app = initializeApp(firebaseConfig);

  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setformData({
      ...formData,
      [name]: value,
    });
  };
  // handle firebase sinup

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    const email = formData.email;
    const password = formData.password;
    console.log(formData);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        toggleForm();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    console.log(email, password);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("login successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit}>
          {isLogin || (
            <label>
              Username
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
          )}
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>

          {isLogin ? (
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
          ) : (
            <button type="submit">Sign Up</button>
          )}
        </form>
        <p onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Login;
