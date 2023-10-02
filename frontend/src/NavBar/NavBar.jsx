import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div class='top-navbar'>
      <Link to="home" class='top-navbar-link'>Home</Link>
      <Link to="about" class='top-navbar-link'>About</Link>
      <Link to="courses" class='top-navbar-link'>Courses</Link>
      <Link to="transcriptions" class='top-navbar-link'>Transcribe</Link>
    </div>
  )
}

export default NavBar