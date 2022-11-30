import React from 'react'
import theme from '../Theme'
import { Box, ThemeProvider, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor: "primary.main", minHeigth: '100%', width:250, display: 'flex', flexDirection:'column'}}>
        <NavLink style={{color: "#fff", textDecoration: 'none', padding: '16px 24px'}} to="/dashboard"><Typography>Home</Typography></NavLink>
        <NavLink style={{color: "#fff", textDecoration: 'none', padding: '16px 24px'}} to="/dashboard">Employees</NavLink>
        <NavLink style={{color: "#fff", textDecoration: 'none', padding: '16px 24px'}} to="/dashboard">Estates</NavLink>
        <NavLink style={{color: "#fff", textDecoration: 'none', padding: '16px 24px'}} to="/dashboard">Offers</NavLink>
        <NavLink style={{color: "#fff", textDecoration: 'none', padding: '16px 24px'}} to="/dashboard">Tenants</NavLink>
      </Box>
    </ThemeProvider>
  )
}

export default Sidebar