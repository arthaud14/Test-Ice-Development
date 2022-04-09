import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPatient from "./pages/AddPatient";

function App() {
  return (
    <Router>
    
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addpatient" element={<AddPatient />} />

        </Routes>
      <Footer />
   
    </Router>
    
  );
}

export default App;
