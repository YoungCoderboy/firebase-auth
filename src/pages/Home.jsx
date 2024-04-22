import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="home-container">
      <header class="app-header">
        <span class="welcome-message">Welcome, {user && user.email}</span>
      </header>
      <main class="content">
        <p>
          You are successfully logged in using Firebase Authentication with
          email and password.
        </p>
        <button class="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </main>
    </div>
  );
};

export default Home;
