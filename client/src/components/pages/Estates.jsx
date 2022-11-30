import React from 'react'
import EstateSidebar from '../EstateSidebar'
import { Outlet } from 'react-router-dom'

const Properties = () => {
  return (
  <div style={{marginTop: 96, height: '100%', width: '100vw', display: 'flex'}}>
        <EstateSidebar/>
        <Outlet/>
    </div>
  )
}

export default Properties