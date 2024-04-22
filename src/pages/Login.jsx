import React, { useState } from "react";
import { auth, googleAuthProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
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
      alert(error.message);
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <GoogleButton onClick={handleGoogle} />
      <p>
        Need to Signup? <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;
