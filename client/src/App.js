import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router>
      <div style={{display:"flex", flexDirection:"column", height:"99vh", justifyContent:"space-between"}}>
        <Navbar/>
        <Home style={{flexGrow: 2}}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
