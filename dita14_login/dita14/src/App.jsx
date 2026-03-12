import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
//Import Toster për të shfaqur njoftime në ekran
import { Link } from "react-router-dom";
import './App.css';
function App() {
  // ---------------------------
  // STATES
  // ---------------------------
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  // ---------------------------
  // HANDLE CHANGE
  // ---------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);

  };
  // ---------------------------
  // HANDLE SUBMIT
  // ---------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Të dy fushat janë të detyrueshme!');
      setSuccess(false);
      toast.error('Të dy fushat janë të detyrueshme!');
      return;
    }
    if (username === 'kebir' && password === 'admin123') {
      setError('');
      setSuccess(true);
      toast.success('Jeni kyçur me sukses!');
    } 
    else {
      setError('Emri i përdoruesit ose fjalëkalimi është i pasaktë.');
      setSuccess(false);
      toast.error('Emri i përdoruesit ose fjalëkalimi është i pasaktë.');
    }
  };
  // ---------------------------
  // JSX
  // ---------------------------
  return (
    <div id="root">
      <Toaster position="top-center" />
      <div className="card">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Jeni kyçur me sukses!</div>}
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
            <label>Emri i përdoruesit</label>
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
            <label>Fjalëkalimi</label>
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p style={{ marginTop: "15px" }}>
          Nuk keni llogari? <Link to="/register">Regjistrohu</Link>
        </p>
      </div>
    </div>
  );
}
export default App;