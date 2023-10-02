import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div class='top-navbar'>
      <Link to="home" class='top-navbar-link'>Home</Link>
      <Link to="about" class='top-navbar-link'>About</Link>
      <Link to="courses" class='top-navbar-link'>Courses</Link>
    </div>
  )
}

export default NavBar