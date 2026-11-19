import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { firebaseConfigured } from './firebase'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {firebaseConfigured ? <App /> : (
      <div className="container">
        <h1>Dita 17: Lidhja me databazën</h1>
        <p>Vendos firebaseConfig të projektit tënd në src/firebase.js.</p>
        <p>Ndiq hapat në README.md dhe aktivizo Cloud Firestore.</p>
      </div>
    )}
  </StrictMode>,
)
