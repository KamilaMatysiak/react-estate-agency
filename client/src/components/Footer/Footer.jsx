import React from 'react'
import './footer.css'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from 'react-router-dom';
import { textAlign } from '@mui/system';

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="footer" sx={{backgroundColor: "primary.main", padding: '32px 0'}}>
        <div className='footerlogo'>
          <img alt="Real Estate"/>
          <Typography variant="xs">Find the house that fit 
            you the best and won’t ruin your budget!</Typography>
            <div>
              <FacebookOutlinedIcon/>
              <FacebookOutlinedIcon/>
              <FacebookOutlinedIcon/>
            </div>
        </div>
        <ul>
          <li><Typography variant="mdm">About</Typography></li>
          <li><Link style={{textDecoration: "none"}} to="/"><Typography variant="sm" color="text.white">About</Typography></Link></li>
          <li><Link style={{textDecoration: "none"}} to="/"><Typography variant="sm" color="text.white">Estates</Typography></Link></li>
          <li><Link style={{textDecoration: "none"}} to="/"><Typography variant="sm" color="text.white">Contact</Typography></Link></li>
        </ul>
        <ul>
          <li><Typography variant="mdm">Links</Typography></li>
          <li><Link style={{textDecoration: "none"}} to="/"><Typography variant="sm" color="text.white">For Employees</Typography></Link></li>
          <li><Link style={{textDecoration: "none"}} to="/"><Typography variant="sm" color="text.white">Privacy Policy</Typography></Link></li>
          <li><Link style={{textDecoration: "none"}} to="/"><Typography variant="sm" color="text.white">Terms of Service</Typography></Link></li>
        </ul>
        <ul>
          <li><Typography variant="mdm">Contact</Typography></li>
          <li><Link style={{textDecoration: "none"}} to="/"><Typography variant="sm" color="text.white">334 Sunset Ave, Pennsylvania</Typography></Link></li>
          <li><Link style={{textDecoration: "none"}} to="/"><Typography variant="sm" color="text.white">+00 123 456 789</Typography></Link></li>
          <li><Link style={{textDecoration: "none"}} to="/"><Typography variant="sm" color="text.white">contact@realestates.com</Typography></Link></li>
        </ul>
      </Box>
    </ThemeProvider>
  )
}

export default Footer