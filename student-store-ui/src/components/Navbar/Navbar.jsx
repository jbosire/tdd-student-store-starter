import * as React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { SocialIcon } from "react-social-icons";
//import FacebookIcon from '@mui/icons-material/Facebook';
//import TwitterIcon from '@mui/icons-material/Twitter';
//import InstagramIcon from '@mui/icons-material/Instagram';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo className="logo" />

      <div className="socials">
        <ul className="sociallinks">
          <li>
            <span>
              <a href="https://twitter.com/codepath?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <SocialIcon network="twitter" bgColor="#2c4047" fgColor="#fff"/>
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/codepathorg/">
              <SocialIcon network="instagram" bgColor="#2c4047" fgColor="#fff"/>
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/codepath.org/">
              <SocialIcon network="facebook" bgColor="#2c4047" fgColor="#fff"/>
              </a>
            </span>
          </li>
        </ul>
      </div>

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
