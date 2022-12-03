import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import AdminPanel from "./components/pages/adminPanel/AdminPanel";
import LandingPage from "./components/pages/LandingPage";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Estates from './components/pages/Estates'
import All from "./components/pages/adminPanel/Estates/All";
import HomeSale from "./components/pages/adminPanel/Estates/HomeSale";
import HomeRent from "./components/pages/adminPanel/Estates/HomeRent";
import ApartmentRent from "./components/pages/adminPanel/Estates/ApartmentRent";
import ApartmentSale from "./components/pages/adminPanel/Estates/ApartmentSale";
import LoginPage from "./components/pages/adminPanel/LoginPage";
import NotFound from "./components/pages/NotFound";
import DebugRegister from "./components/pages/adminPanel/DebugRegister";


function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}>    
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/estates" element={<Estates />}>
            <Route path='/estates/' element={<All/>}/>
            <Route path="/estates/houseForSale" element={<HomeSale />}/>
            <Route path="/estates/apartmentForSale" element={<ApartmentSale/>}/>
            <Route path="/estates/apartmentForRent" element={<ApartmentRent/>}/>
            <Route path="/estates/houseForRent" element={<HomeRent/>}/>
          </Route>
        </Route>
        <Route path='/login' element={user ? <Navigate to='/admin/'/> : <LoginPage/>}/>
        <Route path='/login/register' element={<DebugRegister />}/>
        <Route path='/admin' element={user ? <AdminPanel/> : <Navigate replace to="/login"/>}>
          
        </Route>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
