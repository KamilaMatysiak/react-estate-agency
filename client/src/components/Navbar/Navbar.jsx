import React from 'react'
import { Box, Typography} from '@mui/material'
import './navbar.css'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material/styles';
import logo from '../../data/images/logoWhite.svg'
import logoDark from '../../data/images/logoDark.svg'
import { NavLink, useLocation  } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <Box className="nav"  sx={{backgroundColor: location.pathname ==='/' ? "primary.main":"none" }}>
        <NavLink to='/'>
          <img height="60px" src={location.pathname ==='/' ? logo:logoDark } alt="Real Estate"/>
        </NavLink>
        
        <ul>
          <li><NavLink style={{textDecoration: "none"}} to='/about'><Typography color={location.pathname ==='/' ? 'text.white' : 'text.black'} variant="mdl">ABOUT</Typography></NavLink></li>
          <li><NavLink style={{textDecoration: "none"}} to='/estates'><Typography color={location.pathname ==='/' ? 'text.white' : 'text.black'} variant="mdl">ESTATES</Typography></NavLink></li>
          <li><NavLink style={{textDecoration: "none"}} to='/contact'><Typography color={location.pathname ==='/' ? 'text.white' : 'text.black'} variant="mdl">CONTACT</Typography></NavLink></li>
        </ul>
      </Box>
  
    </ThemeProvider>
  )
}

export default Navbar