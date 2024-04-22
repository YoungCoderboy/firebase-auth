import React, { useState } from "react";
import { auth, googleAuthProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };
  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
      <GoogleButton onClick={handleGoogle} />
      <p>
        Need to Login? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
