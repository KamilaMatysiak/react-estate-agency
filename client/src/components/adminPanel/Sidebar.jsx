import React, { useState, useEffect } from 'react'
import theme from '../Theme'
import { Box, ThemeProvider, Typography, Button } from '@mui/material'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    //navigate('/');
    window.location.reload(false);
    setUser(null);
  };


  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime())
        logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "primary.main", minHeigth: '100%', width: 250, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="admin-panel">
          <Typography variant="lg">Admin Panel</Typography>
        </div>
        <Typography variant="sm">
          <div className="menu-list">
            <NavLink style={({ isActive }) => ({ color: "#fff", textDecoration: 'none', padding: '12px 24px', borderBottom: (location.pathname === '/admin' || isActive) ? '2px solid #FFA220' : 'none' })} to="/admin/dashboard"><HomeOutlinedIcon className="icon" /> Homepage</NavLink>
            <NavLink style={({ isActive }) => ({ color: "#fff", textDecoration: 'none', padding: '12px 24px', borderBottom: isActive ? '2px solid #FFA220' : 'none' })} to="/admin/employees"><PersonOutlineOutlinedIcon className="icon" /> Employees</NavLink>
            <NavLink style={({ isActive }) => ({ color: "#fff", textDecoration: 'none', padding: '12px 24px', borderBottom: isActive ? '2px solid #FFA220' : 'none' })} to="/admin/estates"><HomeWorkOutlinedIcon className="icon" />Estates</NavLink>
            <NavLink style={({ isActive }) => ({ color: "#fff", textDecoration: 'none', padding: '12px 24px', borderBottom: isActive ? '2px solid #FFA220' : 'none' })} to="/admin/offers"><ContentPasteOutlinedIcon className="icon" />Offers</NavLink>
            <NavLink style={({ isActive }) => ({ color: "#fff", textDecoration: 'none', padding: '12px 24px', borderBottom: isActive ? '2px solid #FFA220' : 'none' })} to="/admin/tenants"><WorkOutlineOutlinedIcon className="icon" />Tenants</NavLink>
          </div>
        </Typography>
        <div className="button">
          <Button variant="sm" style={{ textTransform: 'none' }} onClick={() => { logout() }}><ExitToAppOutlinedIcon className="icon" />Logout</Button>
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default Sidebar