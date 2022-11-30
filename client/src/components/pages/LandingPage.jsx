import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import {Outlet} from "react-router-dom";


const LandingPage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height:'100vh', justifyContent: 'space-between'}}>
        <Navbar />      
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LandingPage