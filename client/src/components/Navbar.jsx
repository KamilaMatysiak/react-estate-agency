import React from 'react'

const Navbar = () => {
  return (
    <div style={{width:'100%', height: 70, background:'#d3d3d3', display:'flex', justifyContent:'space-between'}}>
      <div>Logo</div>
      <div>
        <div>About</div>
        <div>Properties</div>
        <div>Contact</div>
      </div>
    </div>
  )
}

export default Navbar