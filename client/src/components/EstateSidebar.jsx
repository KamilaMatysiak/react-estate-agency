import React from 'react'
import theme from './Theme'
import { Box, ThemeProvider, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor: "none", minHeigth: '100%', width:250, display: 'flex', flexDirection:'column'}}>
        <NavLink style={{color: "#333", textDecoration: 'none', padding: '16px 24px'}} to="/estates/"><Typography>All</Typography></NavLink>
        <NavLink style={{color: "#333", textDecoration: 'none', padding: '16px 24px'}} to="/estates/houseForSale">Houses For Sale</NavLink>
        <NavLink style={{color: "#333", textDecoration: 'none', padding: '16px 24px'}} to="/estates/houseForRent">Houses For Rent</NavLink>
        <NavLink style={{color: "#333", textDecoration: 'none', padding: '16px 24px'}} to="/estates/apartmentForSale">Apartments For Sale</NavLink>
        <NavLink style={{color: "#333", textDecoration: 'none', padding: '16px 24px'}} to="/estates/apartmentForRent">Apartments For Rent</NavLink>
      </Box>
    </ThemeProvider>
  )
}

export default Sidebar