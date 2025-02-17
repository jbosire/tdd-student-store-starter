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
        <div className="sociallinks">
          <SocialIcon
            url="https://twitter.com/codepath?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            network="twitter"
            bgColor="#2c4047"
            fgColor="#fff"
          />

          <SocialIcon
            url="https://www.instagram.com/codepathorg/"
            network="instagram"
            bgColor="#2c4047"
            fgColor="#fff"
          />

          <SocialIcon
            url="https://www.facebook.com/codepath.org/"
            network="facebook"
            bgColor="#2c4047"
            fgColor="#fff"
          />
        </div>
      </div>

      <ul className="link">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <a href="/#AboutUs"> About Us </a>
        </li>
        <li>
          <a href="/#ContactUs"> Contact Us </a>
        </li>
        <li>
          <a href="/#BuyNow"> Buy Now</a>
        </li>
        <li>
          <Link to= "/orders">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}
