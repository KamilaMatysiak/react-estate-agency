import React from 'react'
import EstateSidebar from '../EstateSidebar'
import { Outlet } from 'react-router-dom'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material'

const Properties = () => {
  return (
  <ThemeProvider theme={theme}>
   <div style={{marginTop: 96, height: '100%', width: '100vw', display: 'flex'}}>
        <EstateSidebar/>
        <Outlet/>
    </div>
  </ThemeProvider>
  )
}

export default Properties