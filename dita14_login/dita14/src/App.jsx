// Importimi i React dhe hook-use (useState)
import React, { useState } from 'react';
// Importimi i Toast-it për mesazhe popup
//https://react-hot-toast.com/
import { Toaster, toast } from 'react-hot-toast'; //install me: npm install react-hot-toast 
// Importimi i stilimit CSS
import './App.css';

function App() {
  // ---------------------------
  // STATES (variablat që ruhen dhe ndryshojnë gjendjen)
  // ---------------------------
  const [username, setUsername] = useState(''); 
  // username = vlera aktuale
  // setUsername = funksion që ndryshon vlerën e username
  const [password, setPassword] = useState('');
  // E njejta gjë si username por për fjalëkalimin
  const [error, setError] = useState('');
  // Ruajmë mesazhin e gabimit nëse ekziston
  const [success, setSuccess] = useState(false);
  // Ruajmë statusin e kyçjes (true = sukses, false = gabim)
  // ----------------------------------------------------------
  // Funksion që thirret sa herë përdoruesi shkruan në input
  // ----------------------------------------------------------
  const handleChange = (event) => {
    // event.target.name = emri i input (username ose password)
    // event.target.value = vlera që po shkruhet
    const { name, value } = event.target;
    // Kontrollojmë se cili input po shkruhet
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };
  // ----------------------------------------------------------
  // Funksion që thirret kur klikohet butoni "Login"
  // ----------------------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Parandalon refresh të faqes kur forma dërgohet
    // Nëse njëri nga inputet është bosh
    if (!username || !password) {
      setError('Të dy fushat janë të detyrueshme!');
      setSuccess(false);
      toast.error('Të dy fushat janë të detyrueshme!'); // Mesazh dritare
      return; 
      // Ndërpret vazhdimin e funksionit
    }
    // Nëse kredencialet janë të sakta
    if (username === 'kebir' && password === 'admin123') {
      setError('');            // Hiq gabimet
      setSuccess(true);        // Vendos statusin e suksesit
      toast.success('Jeni kyçur me sukses!'); // Popup suksesi
    } else {
      // Kredencialet e pasakta
      setError('Emri i përdoruesit ose fjalëkalimi është i pasaktë.');
      setSuccess(false);
      toast.error('Emri i përdoruesit ose fjalëkalimi është i pasaktë.');
    }
  };
  // ----------------------------------------------------------
  // JSX (HTML brenda React-it) – ajo që shfaqet në ekran
  // ----------------------------------------------------------
  return (
    <div id="root"> 
      {/* Komponenti i Toast-it (duhet një herë në app) */}
      <Toaster position="top-center" reverseOrder={false} />
      {/* Kutia e formularit (card) */}
      <div className="card">
        {/* Titulli */}
        <h2>Login</h2>
        {/* Mesazhi i gabimit */}
        {error && <div className="error-message">{error}</div>}
        {/* Mesazhi i suksesit */}
        {success && <div className="success-message">Jeni kyçur me sukses!</div>}
        {/* Forma që dërgon të dhënat */}
        <form onSubmit={handleSubmit}>
          {/* Input për username */}
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
          {/* Input për password */}
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
          {/* Butoni i login-it */}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
// Eksportojmë komponentin që React ta përdorë në aplikacion
export default App;