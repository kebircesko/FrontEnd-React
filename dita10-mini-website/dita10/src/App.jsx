import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";//mos harroni me instalu npm install react-router-dom
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Products from "./pages/Products";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Routes - Mbështjell të gjitha Route-t që lidhen me URL dhe komponentin përkatës */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
