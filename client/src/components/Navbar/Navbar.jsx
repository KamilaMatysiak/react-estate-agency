import React from 'react'
import { Box } from '@mui/material'
import './navbar.css'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material/styles';

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="nav" sx={{backgroundColor: "primary.main"}}>
        <img alt="Real Estate"/>
        <ul>
          <li><a>About</a></li>
          <li><a>Estates</a></li>
          <li><a>Contact</a></li>
        </ul>
      </Box>
    </ThemeProvider>
  )
}

export default Navbar