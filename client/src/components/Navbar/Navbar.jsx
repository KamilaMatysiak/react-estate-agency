import React from 'react'
import { Box, Typography} from '@mui/material'
import './navbar.css'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material/styles';
import logo from '../../data/images/logoWhite.svg'

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="nav" sx={{backgroundColor: "primary.main"}}>
        <img height="60px" src={logo} alt="Real Estate"/>
        <ul>
          <li><Typography variant="mdl">ABOUT</Typography></li>
          <li><Typography variant="mdl">ESTATES</Typography></li>
          <li><Typography variant="mdl">CONTACT</Typography></li>
        </ul>
      </Box>
    </ThemeProvider>
  )
}

export default Navbar