import React from 'react'
import EstateSidebar from '../EstateSidebar'
import { Outlet } from 'react-router-dom'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material';

const Estates = () => {
  return (
  <ThemeProvider theme={theme}>
   <div style={{marginTop: 96, flex: 1, width: '98vw', display: 'flex'}}>
        <EstateSidebar/>
        <Outlet/>
    </div>
  </ThemeProvider>
  )
}

export default Estates