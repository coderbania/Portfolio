import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src="\public\image\2.png" alt="" />
      </div>

      <div className="links">

         < NavLink  to="/" element={<Home />} className={'a'}>
          Home
        </NavLink>

        <NavLink to="/about" element={<About />} className={'a'}>
          About
        </NavLink>

        <NavLink to="/Projects" element={<Projects />} className={'a'}>
          Projects
        </NavLink>

        <NavLink to='/resume' element={<Resume></Resume>} className={'a'} > Resume </NavLink>

      </div>
    </div>
  );
}

export default Nav;
