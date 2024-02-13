import React, { useState } from "react";
import { Link } from "gatsby";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import youtube from "../img/social/youtube.svg";
import pinterest from "../img/social/pinterest.svg";
import twitter from "../img/social/twitter.svg";
import logo from "../img/logo.png";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const scrollPosition = useScrollPosition()
  const navbarOpaque = scrollPosition > 80

  return (
    <nav
      className={`navbar is-fixed-top ${navbarOpaque ? 'is-semitransparent small' : 'is-semitransparent large'}`}
      role="navigation"
      aria-label="main-navigation"
    >
      
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Desire Radiant Health" style={{ width: "88px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/services">
                Holistic Nutrition
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/healing">
                Energy Healing
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <div className="navbar-item has-dropdown is-arrowless is-hoverable">
                <a className="navbar-link">
                  About
                </a>        
                <div className="navbar-dropdown">
                <Link className="navbar-item" to="/about">
                    Meet Olivia
                  </Link>
                  <Link className="navbar-item" to="/nutrition">
                    Holistic Nutrition
                  </Link>
                </div>
              </div>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            </li>

            {/* <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
            </li> */}
            {/* <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact/examples">
              Social
            </Link>
            </li> */}

          <li className="navbar-end has-text-centered" >
            <Link className="navbar-item" to="https://www.facebook.com/desireradianthealth">
              <span className="icon">
                <img src={facebook} alt="Facebook" />
              </span>
            </Link>
            <a
              className="navbar-item"
              href="https://www.instagram.com/desireradianthealth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={instagram} alt="Instagram" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://www.youtube.com/channel/UCPHyM0fgHONfxgSRgNo70_A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={youtube} alt="Youtube" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://www.pinterest.com/desireradianthealth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={pinterest} alt="Pinterest" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://mobile.twitter.com/desireradiance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={twitter} alt="Twitter" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
