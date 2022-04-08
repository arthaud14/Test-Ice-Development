import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
      <Footer />
   
    </Router>
    
  );
}

export default App;
