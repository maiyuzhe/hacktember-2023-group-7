import React from "react";
import {Link} from "react-router-dom";
//import Button from "./Button";
import "../index.css";

const Header = () => {
  return (
    <div className="header">
      <Link class="" to="/home">
        <img class="logo" alt="Logo" src="logo.png" />
      </Link>   
      <Link class="button" to="/about">About</Link>
      <Link class="button" to="/courses">Courses</Link>
      <Link class="button" to="/transcriptions">Transcriptions</Link>
    </div>
  );
};


export default Header
