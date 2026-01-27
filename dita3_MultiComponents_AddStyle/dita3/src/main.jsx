// Importojmë StrictMode nga React
// StrictMode ndihmon për të zbuluar gabime gjatë zhvillimit
import { StrictMode } from 'react'

// Importojmë createRoot nga react-dom/client
// Kjo përdoret për të lidhur React-in me HTML (DOM)
import { createRoot } from 'react-dom/client'

// Importojmë CSS-in kryesor të projektit
// Ky file ndikon në stilimin e të gjithë aplikacionit
import './index.css'

// Importojmë komponentin kryesor App
// App.jsx përmban gjithë strukturën e aplikacionit
import App from './App.jsx'

// Gjejmë elementin me id="root" në index.html
// Dhe e përdorim si pikë nisjeje për React
createRoot(document.getElementById('root')).render(

  // StrictMode kontrollon kodin për gabime të mundshme
  // Nuk ndikon në versionin final (production)
  <StrictMode>

    {/* Thërrasim komponentin kryesor të aplikacionit */}
    <App />
  </StrictMode>
);
