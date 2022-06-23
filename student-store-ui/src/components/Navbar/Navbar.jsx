import * as React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import FacebookIcon from '@mui/icons-material/Facebook';
//import TwitterIcon from '@mui/icons-material/Twitter';
//import InstagramIcon from '@mui/icons-material/Instagram';


export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo className="logo"/>
    
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
