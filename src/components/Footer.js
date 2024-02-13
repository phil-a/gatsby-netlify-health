import * as React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import youtube from "../img/social/youtube.svg";
import pinterest from "../img/social/pinterest.svg";
import twitter from "../img/social/twitter.svg";
import logo from "../img/logo-small.png";

const Footer = () => {
  return (
    <footer id="" className="footer hero is-medium has-background-sunset">
            {/* <svg id="wave" style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 410" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(235, 255, 252, 1)" offset="0%"></stop><stop stop-color="rgba(0, 0, 0, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,41L60,68.3C120,96,240,150,360,143.5C480,137,600,68,720,61.5C840,55,960,109,1080,157.2C1200,205,1320,246,1440,225.5C1560,205,1680,123,1800,82C1920,41,2040,41,2160,54.7C2280,68,2400,96,2520,88.8C2640,82,2760,41,2880,47.8C3000,55,3120,109,3240,129.8C3360,150,3480,137,3600,116.2C3720,96,3840,68,3960,54.7C4080,41,4200,41,4320,82C4440,123,4560,205,4680,225.5C4800,246,4920,205,5040,191.3C5160,178,5280,191,5400,184.5C5520,178,5640,150,5760,177.7C5880,205,6000,287,6120,321.2C6240,355,6360,342,6480,328C6600,314,6720,301,6840,246C6960,191,7080,96,7200,61.5C7320,27,7440,55,7560,102.5C7680,150,7800,219,7920,232.3C8040,246,8160,205,8280,157.2C8400,109,8520,55,8580,27.3L8640,0L8640,410L8580,410C8520,410,8400,410,8280,410C8160,410,8040,410,7920,410C7800,410,7680,410,7560,410C7440,410,7320,410,7200,410C7080,410,6960,410,6840,410C6720,410,6600,410,6480,410C6360,410,6240,410,6120,410C6000,410,5880,410,5760,410C5640,410,5520,410,5400,410C5280,410,5160,410,5040,410C4920,410,4800,410,4680,410C4560,410,4440,410,4320,410C4200,410,4080,410,3960,410C3840,410,3720,410,3600,410C3480,410,3360,410,3240,410C3120,410,3000,410,2880,410C2760,410,2640,410,2520,410C2400,410,2280,410,2160,410C2040,410,1920,410,1800,410C1680,410,1560,410,1440,410C1320,410,1200,410,1080,410C960,410,840,410,720,410C600,410,480,410,360,410C240,410,120,410,60,410L0,410Z"></path></svg> */}
            {/* <svg id="wave" style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 410" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,205L60,198.2C120,191,240,178,360,198.2C480,219,600,273,720,307.5C840,342,960,355,1080,321.2C1200,287,1320,205,1440,191.3C1560,178,1680,232,1800,232.3C1920,232,2040,178,2160,184.5C2280,191,2400,260,2520,259.7C2640,260,2760,191,2880,177.7C3000,164,3120,205,3240,205C3360,205,3480,164,3600,184.5C3720,205,3840,287,3960,314.3C4080,342,4200,314,4320,300.7C4440,287,4560,287,4680,252.8C4800,219,4920,150,5040,157.2C5160,164,5280,246,5400,287C5520,328,5640,328,5760,287C5880,246,6000,164,6120,157.2C6240,150,6360,219,6480,211.8C6600,205,6720,123,6840,88.8C6960,55,7080,68,7200,75.2C7320,82,7440,82,7560,123C7680,164,7800,246,7920,239.2C8040,232,8160,137,8280,82C8400,27,8520,14,8580,6.8L8640,0L8640,410L8580,410C8520,410,8400,410,8280,410C8160,410,8040,410,7920,410C7800,410,7680,410,7560,410C7440,410,7320,410,7200,410C7080,410,6960,410,6840,410C6720,410,6600,410,6480,410C6360,410,6240,410,6120,410C6000,410,5880,410,5760,410C5640,410,5520,410,5400,410C5280,410,5160,410,5040,410C4920,410,4800,410,4680,410C4560,410,4440,410,4320,410C4200,410,4080,410,3960,410C3840,410,3720,410,3600,410C3480,410,3360,410,3240,410C3120,410,3000,410,2880,410C2760,410,2640,410,2520,410C2400,410,2280,410,2160,410C2040,410,1920,410,1800,410C1680,410,1560,410,1440,410C1320,410,1200,410,1080,410C960,410,840,410,720,410C600,410,480,410,360,410C240,410,120,410,60,410L0,410Z"></path></svg> */}

      {/* <div id="subscription-box" class="container has-text-centered columns">
        <div
          class="column is-6 is-offset-3 has-background-white p-6"
          style={{ borderRadius: "10px" }}
        >
          <h1 class="title">Get Access to Updates</h1>
          <h2 class="subtitle">
            Subscribe for non-intrusive health and nutrition updates straight to
            your inbox.
          </h2>
          <div style={{ background: "transparent" }}>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your email"
                />
              </p>
              <p class="control">
                <a class="button is-primary">Subscribe</a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L60,245.3C120,235,240,213,360,224C480,235,600,277,720,293.3C840,309,960,299,1080,277.3C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,288L120,293.3C240,299,480,309,720,304C960,299,1200,277,1320,266.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      
      
      <div id="footer-container" className="columns content hero-body mb-0">
        <div className="column is-4 px-4">
          <img
            src={logo}
            alt="Desire Radiant Health"
              style={{ width: "5em", height: "auto" }}
            />
          <h2 className="title is-4">Desire Radiant Health</h2>
          <h4 className="subtitle is-6">
            Make the right decisions for your health.
          </h4>
          <p>
          <a href="mailto:desireradiance@gmail.com" className="email-link subtitle is-6 mb-4">desireradiance@gmail.com</a>
          <br />
          <a href="tel:16473896501" className="email-link subtitle is-6 mb-4">1-647-389-6501</a>
          </p>
        </div>
        <div className="column px-4" style={{marginTop: "6rem"}}>
          <ul className="footer-menu-list m-0">
            <li>
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="column px-4" style={{marginTop: "6rem"}}>
          <ul className="footer-menu-list m-0">
            <li>
              <Link className="" to="/contact/examples">
                Contact
              </Link>
            </li>
            <li>
              <Link className="" to="/social">
                Social
              </Link>
            </li>
            <li>
              <Link className="" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="column social px-4" style={{marginTop: "6rem"}}>
          <h2 className="title is-6 mb-0">Let's Chat</h2>

          <div className="social-links">
          <a
            title="facebook"
            href="https://www.facebook.com/desireradianthealth"
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a
            title="instagram"
            href="https://www.instagram.com/desireradianthealth"
          >
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a
            title="youtube"
            href="https://www.youtube.com/channel/UCPHyM0fgHONfxgSRgNo70_A"
          >
            <img
              src={youtube}
              alt="youtube"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="pinterest" href="https://www.pinterest.com/desireradianthealth">
            <img
              src={pinterest}
              alt="pinterest"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="twitter" href="https://mobile.twitter.com/desireradiance">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
