import React from 'react'
import "./Nav.css"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
        <NavLink to="/" className={({isActive}) => (isActive ? 'active-link' : "") }>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? 'active-link' : "") } >About</NavLink>
        <NavLink to="/projects" className={({isActive}) => (isActive ? 'active-link' : "") }>Projects</NavLink>
    </nav>
  )
}

export default Nav