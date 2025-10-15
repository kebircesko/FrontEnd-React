import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//import per link to te cilat i lidhim komponentet me leht 
import Home from './components/Home';//komponenti qe kemi krijuar 
import Project from './components/Project';//komponenti qe kemi krijuar 
import About  from './components/About' //komponenti qe kemi krijuar 
import NavBar from "./components/NavBar";//komponenti qe kemi krijuar 
import './App.css'

const App = () => {
  return (
    <Router>
      <>
        {/* Navbar i qëndrueshëm në të gjitha faqet */}
        <NavBar />

          {/* Rrugët për shfaqjen e faqeve sipas path-it */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>

      </>
    </Router>
  );
};
export default App;