// Importojmë useState nga React për të ruajtur gjendje (state)
import { useState } from 'react'
// Importojmë komponentin tonë ColorBox
// Ky komponent përmban kutinë që ndryshon ngjyrën
import ColorBox from './ColorBox'
// Importojmë logot e React dhe Vite (p.sh për shfaqje ose ikonë)
// Këto janë imazhe SVG të përdorura zakonisht në template
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Importojmë CSS-in kryesor për këtë komponent
import './App.css'
// Krijojmë komponentin kryesor të aplikacionit
function App() {
  // Krijojmë një state me emrin "count" fillimisht 0
  // setCount është funksioni për ta ndryshuar këtë vlerë
  // JSX që do të shfaqet në ekran
  return (
    //1 element → <></> nuk duhet ,2+ elemente → përdor <></> ose <div>
    <>    
      {/* Thërrasim komponentin ColorBox që shfaq kutinë me ngjyrë */}
      <ColorBox/>
    </>

  )
}
// Eksportojmë App që të mund të përdoret në main.jsx
export default App
