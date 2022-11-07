import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", height:"99vh", justifyContent:"space-between"}}>
    <Navbar/>
    <Home style={{flexGrow: 2}}/>
    <Footer/>
    </div>
  );
}

export default App;
