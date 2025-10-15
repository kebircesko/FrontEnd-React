import "./App.css";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css"; //te instalohet npm install bootstrap


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
