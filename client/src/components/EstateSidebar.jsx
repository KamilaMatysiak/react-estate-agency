import React from 'react'
import theme from './Theme'
import { Box, ThemeProvider, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  let activeStyle = {
    color: "#333", 
    textDecoration: 'none', 
    fontWeight: '600',
    borderBottom: "2px solid #FFA220",
    paddingRight: "8px",
  }

  let navStyle = {
    color: "#555", 
    textDecoration: 'none', 
    paddingRight: "8px",
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor: "none", minHeigth: '100%', width:250, display: 'flex', flexDirection:'column'}}>
        <div style={{padding: "16px 24px"}}><NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} to="/estates/">All</NavLink></div>
        <div style={{padding: "16px 24px"}}><NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} to="/estates/houseForSale">Houses For Sale</NavLink></div>
        <div style={{padding: "16px 24px"}}><NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} to="/estates/apartmentForSale">Apartments For Sale</NavLink></div>
        <div style={{padding: "16px 24px"}}><NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} to="/estates/houseForRent">Houses For Rent</NavLink></div>
        <div style={{padding: "16px 24px"}}><NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} to="/estates/apartmentForRent">Apartments For Rent</NavLink></div>
      </Box>
    </ThemeProvider>
  )
}

export default Sidebar