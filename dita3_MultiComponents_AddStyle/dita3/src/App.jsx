import { useState } from 'react'
import ColorBox from './ColorBox'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ColorBox/>
    </>
  )
}

export default App
