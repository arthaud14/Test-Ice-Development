import "./App.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPatient from "./pages/AddPatient";
import Sidebar from "./components/Sidebar";
import Arrangement from "./pages/Arrangement";
import Contactus from "./pages/Contactus";




function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addpatient" element={<AddPatient />} />
        <Route exact path="/arrangement" element={<Arrangement />} />
        <Route exact path="/contactus" element={<Contactus />} />

        


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
