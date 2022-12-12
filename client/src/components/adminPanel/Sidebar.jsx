import React, { useState, useEffect } from 'react'
import theme from '../Theme'
import { Box, ThemeProvider, Typography, Button } from '@mui/material'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import './Sidebar.css'


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
            <NavLink style={{ color: "#fff", textDecoration: 'none', padding: '16px 24px' }} to="/admin/">Home</NavLink>
            <NavLink style={{ color: "#fff", textDecoration: 'none', padding: '16px 24px' }} to="/admin/employees">Employees</NavLink>
            <NavLink style={{ color: "#fff", textDecoration: 'none', padding: '16px 24px' }} to="/admin/estates">Estates</NavLink>
            <NavLink style={{ color: "#fff", textDecoration: 'none', padding: '16px 24px' }} to="/admin/offers">Offers</NavLink>
            <NavLink style={{ color: "#fff", textDecoration: 'none', padding: '16px 24px' }} to="/admin/tenants">Tenants</NavLink>
          </div>
        </Typography>
        <div className="button">
          <Button variant="text.white" onClick={() => { logout() }}>Logout</Button>
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default Sidebar