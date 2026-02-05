import { useState } from "react";
import ProductFilter from "./components/ProductFilter";
import "./App.css";

function App() {
  const messages = [
    "Learn React",
    "Practice Every Day",
    "Build Cool Projects",
  ];

  const [index, setIndex] = useState(0);

  const nextText = () => {
    setIndex((prev) => (prev + 1) % messages.length);
  };

  const prevText = () => {
    setIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  return (
    <div className="app">
      <h1>React Text Slider</h1>

      <div className="slider">
        <button onClick={prevText}>❮</button>
        <p className="text">{messages[index]}</p>
        <button onClick={nextText}>❯</button>
      </div>

      <ProductFilter />
    </div>
  );
}

export default App;
