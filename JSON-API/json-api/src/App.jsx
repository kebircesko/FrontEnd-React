import { useState } from 'react'
import Users from './components/Users'
import DogImage from './components/DogImage'
import './App.css'

function App() {
  return (
    <>
     <div>
      <h1 style={{textAlign:'center',fontFamily:'sans-serif'}}>
        Shembull : JSON-API me ReactJS
      </h1>

      <Users />
      <hr style ={{margin :"40px 0"}}/>

      <DogImage />
     </div>
    </>
  );
}

export default App;
