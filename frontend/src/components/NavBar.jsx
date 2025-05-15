import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar=()=>{
    return(
<div className="pt-8 pl-5 flex items-center bg-[#1e3a8a]">
    <NavLink to="/">
  <img
    src="src/assets/Keithston (3).png"
    alt="HomePageLogo"
    className="h-[5.5rem] mt-1"
  />
  </NavLink>
</div>
    )
};

export default NavBar;