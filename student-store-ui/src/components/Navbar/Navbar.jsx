import * as React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="link">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/#aboutUs"> About Us </Link>
        </li>
        <li>
          <Link to="/#contactUs"> Contact Us </Link>
        </li>
        <li>
          <Link to="/#buyNow"> Buy Now</Link>
        </li>
      </ul>
    </nav>
  );
}
