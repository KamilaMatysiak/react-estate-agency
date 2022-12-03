import React, {useState, useEffect} from 'react'
import theme from '../Theme'
import { Box, ThemeProvider, Typography, Button } from '@mui/material'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({type: 'LOGOUT'});
    //navigate('/');
    window.location.reload(false);
    setUser(null);
  };


  useEffect(() => {
      const token = user?.token;

      if(token) {
          const decodedToken = decode(token);
          if(decodedToken.exp * 1000 < new Date().getTime()) 
              logout();
      }

      setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor: "primary.main", minHeigth: '100%', width:250, display: 'flex', flexDirection:'column'}}>
        <NavLink style={{color: "#fff", textDecoration: 'none', padding: '16px 24px'}} to="/dashboard"><Typography>Home</Typography></NavLink>
        <NavLink style={{color: "#fff", textDecoration: 'none', padding: '16px 24px'}} to="/dashboard">Employees</NavLink>
        <NavLink style={{color: "#fff", textDecoration: 'none', padding: '16px 24px'}} to="/dashboard">Estates</NavLink>
        <NavLink style={{color: "#fff", textDecoration: 'none', padding: '16px 24px'}} to="/dashboard">Offers</NavLink>
        <NavLink style={{color: "#fff", textDecoration: 'none', padding: '16px 24px'}} to="/dashboard">Tenants</NavLink>
        <Button color="secondary" onClick={() => {logout()}}>Log Out</Button>
      </Box>
    </ThemeProvider>
  )
}

export default Sidebar