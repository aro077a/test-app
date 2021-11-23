import React from "react";
import { Link, NavLink } from "react-router-dom";
import home from "./../../assets/images/Logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="homeLogo">
        <img src={home} alt="Home" />
        <b>My Exam Doctor</b>
      </Link>
      <nav className="links">
        <NavLink to="/">
          <b>PUT ME TO THE TEST</b>
        </NavLink>
        <NavLink to="/">
          <b>GUIDE MY LEARNING</b>
        </NavLink>
        <NavLink to="/">
          <b>TRACK MY PROGRESS</b>
        </NavLink>
      </nav>
      <button className="signOut">Sign Out</button>
    </header>
  );
};

export default Header;
