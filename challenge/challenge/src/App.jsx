// File: App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("home");

  function renderPage() {
    if (page === "home") return <Home />;
    if (page === "about") return <About />;
    if (page === "contact") return <Contact />;
    return <Home />;
  }

  return (
    <div>
      <Navbar onNavigate={setPage} current={page} />
      {renderPage()}
    </div>
  );
}