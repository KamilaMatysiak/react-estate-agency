import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import AdminPanel from "./components/pages/adminPanel/AdminPanel";
import LandingPage from "./components/pages/LandingPage";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Estates from './components/pages/Estates'
import Estate from './components/pages/Estate'
import All from "./components/pages/Estates/All";
import HomeSale from "./components/pages/Estates/HomeSale";
import HomeRent from "./components/pages/Estates/HomeRent";
import ApartmentRent from "./components/pages/Estates/ApartmentRent";
import ApartmentSale from "./components/pages/Estates/ApartmentSale";
import LoginPage from "./components/pages/adminPanel/LoginPage";
import NotFound from "./components/pages/NotFound";
import DebugRegister from "./components/pages/adminPanel/DebugRegister";
import Dashboard from './components/pages/adminPanel/Dashboard';
import Employees from './components/pages/adminPanel/Employees';
import Offers from './components/pages/adminPanel/Offers';
import AdminEstates from './components/pages/adminPanel/AdminEstates';
import Tenants from './components/pages/adminPanel/Tenants';


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
            <Route path='/estates' element={<All/>}/>
            <Route path="/estates/houseForSale" element={<HomeSale />}/>
            <Route path="/estates/apartmentForSale" element={<ApartmentSale/>}/>
            <Route path="/estates/apartmentForRent" element={<ApartmentRent/>}/>
            <Route path="/estates/houseForRent" element={<HomeRent/>}/>
          </Route>
          <Route path="/estate/:id" element={<Estate />}></Route>
        </Route>
        <Route path='/login' element={user ? <Navigate to='/admin/'/> : <LoginPage/>}/>
        <Route path='/login/register' element={<DebugRegister />}/>
        <Route path='/admin' element={user ? <AdminPanel/> : <Navigate replace to="/login"/>}>
            <Route path='/admin' element={<Dashboard/>}/>
            <Route path='/admin/dashboard' element={<Dashboard/>}/>
            <Route path="/admin/employees" element={<Employees />}/>
            <Route path="/admin/estates" element={<AdminEstates/>}/>
            <Route path="/admin/offers" element={<Offers/>}/>
            <Route path="/admin/tenants" element={<Tenants/>}/>
            <Route path="/admin/tenants/search" element={<Tenants/>}/>
        </Route>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
