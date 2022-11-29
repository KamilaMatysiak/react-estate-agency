import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Estates from "./components/pages/Estates";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
     <Router >
      <div style={{display: 'flex', flexDirection: 'column', height:'100vh', justifyContent: 'space-between'}}>
      <Navbar />      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />}/>
          <Route path="about" element={<About />}/>
          <Route path="estates" element={<Estates />}/>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
