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
  const [count, setCount] = useState(0)

  // JSX që do të shfaqet në ekran
  return (
    //1 element → <></> nuk duhet ,2+ elemente → përdor <></> ose <div>
    <>    
      {/* Thërrasim komponentin ColorBox që shfaq kutinë me ngjyrë */}
      <ColorBox/>

      {/* Mund të shtojmë më shumë komponentë ose elementë këtu */}

      {/* <h1>Mirësevini në React me Vite!</h1>

      <div className="logos">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
      </div>

      <h2>Numri i klikimeve: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Kliko këtu për të rritur numrin
      </button>
      <p>
        Redakto <code>src/App.jsx</code> për të parë ndryshimet në veprim.
      </p>

      <p>
        Shiko dokumentacionin për të mësuar më shumë rreth React dhe Vite.
      </p>   */}
    </>
  
  )
}

// Eksportojmë App që të mund të përdoret në main.jsx
export default App
