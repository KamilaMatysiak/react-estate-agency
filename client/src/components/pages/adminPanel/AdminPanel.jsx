import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../adminPanel/Sidebar'

const AdminPanel = () => {
  return (
    <div style={{height: '100vh', width: '100vw', display: 'flex'}}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default AdminPanel