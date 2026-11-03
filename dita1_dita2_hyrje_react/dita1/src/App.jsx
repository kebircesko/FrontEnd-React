import { useState } from 'react' //useState ruan një vlerë që mund të ndryshojë.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { //është një component.Component = një pjesë e aplikacionit.
  const [count, setCount] = useState(0) 

  const[like,setLike] = useState(0) //useState ruan një vlerë që mund të ndryshojë.
 
      {/*count     → vlera aktuale
      setCount  → e ndryshon vlerën
      0         → vlera fillestare */
      }
  return ( //tregon çka shfaqet në faqe.
    <> {/* Fragment - mban disa elemente bashkë */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 id="hid1">Shkolla Digjitale Prizren</h1>
      <h4 id="hid2">2026/2027</h4>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> {/*është event — ekzekutohet kur klikohet butoni. */}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    <div>
      <h1>Counter App shembulli</h1>
      <h2 id="like-count">{like}</h2>
        <button className='btn-change' onClick={() => setLike(like + 1)}>
        +
      </button>
      <button className='btn-change' onClick={() => setLike(like - 1)}>
        -
      </button>
      <button className='btn-change' onClick={() => setLike(0)}>
        Reset
      </button>
    </div>
    {/*detyre ne fund shto css ne kete shembull te fundit per butona ose dicka tjeter */}
    </>
  )
}

export default App
