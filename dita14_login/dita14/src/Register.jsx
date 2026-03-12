import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./App.css";
function Register() {
  // -----------------------
  // STATES
  // -----------------------
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  // -----------------------
  // HANDLE CHANGE
  // -----------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };
  // -----------------------
  // HANDLE SUBMIT
  // -----------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError("Të gjitha fushat janë të detyrueshme!");
      toast.error("Të gjitha fushat janë të detyrueshme!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Fjalëkalimet nuk përputhen!");
      toast.error("Fjalëkalimet nuk përputhen!");
      return;
    }

    if (password.length < 6) {
      setError("Password duhet të ketë të paktën 6 karaktere!");
      toast.error("Password duhet të ketë të paktën 6 karaktere!");
      return;
    }

    setError("");
    setSuccess(true);

    toast.success("Regjistrimi u krye me sukses!");
  };
  // -----------------------
  // JSX
  // -----------------------
  return (
    <div id="root">
      <Toaster position="top-center" />
      <div className="card">
        <h2>Register</h2>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Regjistrimi u krye me sukses!</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Password</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Confirm Password</label>
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
        <p style={{ marginTop: "15px" }}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
export default Register;