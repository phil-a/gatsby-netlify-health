import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import Footer from "../components/Footer";
import useScrollPosition from "../hooks/useScrollPosition";
import useScript from "../hooks/useScript";
// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  fullImage,
  fullImage2,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  const fullWidthImage = getImage(fullImage) || fullImage;
  const fullWidthImage2 = getImage(fullImage2) || fullImage2;
  const titleBackground = "rgba(255,235,180,0)";
  const titleForeground = "rgba(255,255,255,1)";
  const scrollPosition = useScrollPosition();
  const circleHeightAdjust = scrollPosition > 80;
  const paused = scrollPosition > 80;

  return (
    <div>
      <FullWidthImage
        img={heroImage}
        title={title}
        subheading={subheading}
        hasGradient={true}
        titleBackground={titleBackground}
        titleForeground={titleForeground}
        height="80vh"
        display="flex"
      />

      <div className="main-area">
        <div
          className={`circles ${
            circleHeightAdjust ? "" : "is-height-adjusted"
          } ${paused ? "paused" : ""}`}
        >
          <div className={`${paused ? "paused" : ""}`}></div>
          <div className={`${paused ? "paused" : ""}`}></div>
          <div className={`${paused ? "paused" : ""}`}></div>
          <div className={`${paused ? "paused" : ""}`}></div>
          <div className={`${paused ? "paused" : ""}`}></div>
          <div className={`${paused ? "paused" : ""}`}></div>
          <div className={`${paused ? "paused" : ""}`}></div>
          <div className={`${paused ? "paused" : ""}`}></div>
          <div className={`${paused ? "paused" : ""}`}></div>
          <div className={`${paused ? "paused" : ""}`}></div>
        </div>
      </div>

      <section class="hero">
        <div class="hero-body">
          <p class="title">{mainpitch.title}</p>
          <p class="subtitle">{mainpitch.description}</p>
        </div>
      </section>

      <FullWidthImage
        img={fullWidthImage2}
        objectFit={"contain"}
        imgPosition={"bottom"}
      />
      <section class="hero has-background-sunset">
        {/* <svg id="wave" style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 410" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(235, 255, 252, 1)" offset="0%"></stop><stop stop-color="rgba(0, 0, 0, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,41L60,68.3C120,96,240,150,360,143.5C480,137,600,68,720,61.5C840,55,960,109,1080,157.2C1200,205,1320,246,1440,225.5C1560,205,1680,123,1800,82C1920,41,2040,41,2160,54.7C2280,68,2400,96,2520,88.8C2640,82,2760,41,2880,47.8C3000,55,3120,109,3240,129.8C3360,150,3480,137,3600,116.2C3720,96,3840,68,3960,54.7C4080,41,4200,41,4320,82C4440,123,4560,205,4680,225.5C4800,246,4920,205,5040,191.3C5160,178,5280,191,5400,184.5C5520,178,5640,150,5760,177.7C5880,205,6000,287,6120,321.2C6240,355,6360,342,6480,328C6600,314,6720,301,6840,246C6960,191,7080,96,7200,61.5C7320,27,7440,55,7560,102.5C7680,150,7800,219,7920,232.3C8040,246,8160,205,8280,157.2C8400,109,8520,55,8580,27.3L8640,0L8640,410L8580,410C8520,410,8400,410,8280,410C8160,410,8040,410,7920,410C7800,410,7680,410,7560,410C7440,410,7320,410,7200,410C7080,410,6960,410,6840,410C6720,410,6600,410,6480,410C6360,410,6240,410,6120,410C6000,410,5880,410,5760,410C5640,410,5520,410,5400,410C5280,410,5160,410,5040,410C4920,410,4800,410,4680,410C4560,410,4440,410,4320,410C4200,410,4080,410,3960,410C3840,410,3720,410,3600,410C3480,410,3360,410,3240,410C3120,410,3000,410,2880,410C2760,410,2640,410,2520,410C2400,410,2280,410,2160,410C2040,410,1920,410,1800,410C1680,410,1560,410,1440,410C1320,410,1200,410,1080,410C960,410,840,410,720,410C600,410,480,410,360,410C240,410,120,410,60,410L0,410Z"></path></svg> */}
<svg id="wave" style={{transform: "rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 200" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(190.018, 0, 244.034, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 0)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px);", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,0L48,20C96,40,192,80,288,83.3C384,87,480,53,576,46.7C672,40,768,60,864,86.7C960,113,1056,147,1152,140C1248,133,1344,87,1440,73.3C1536,60,1632,80,1728,73.3C1824,67,1920,33,2016,43.3C2112,53,2208,107,2304,126.7C2400,147,2496,133,2592,120C2688,107,2784,93,2880,100C2976,107,3072,133,3168,123.3C3264,113,3360,67,3456,43.3C3552,20,3648,20,3744,33.3C3840,47,3936,73,4032,100C4128,127,4224,153,4320,156.7C4416,160,4512,140,4608,133.3C4704,127,4800,133,4896,120C4992,107,5088,73,5184,56.7C5280,40,5376,40,5472,60C5568,80,5664,120,5760,133.3C5856,147,5952,133,6048,133.3C6144,133,6240,147,6336,150C6432,153,6528,147,6624,150C6720,153,6816,167,6864,173.3L6912,180L6912,200L6864,200C6816,200,6720,200,6624,200C6528,200,6432,200,6336,200C6240,200,6144,200,6048,200C5952,200,5856,200,5760,200C5664,200,5568,200,5472,200C5376,200,5280,200,5184,200C5088,200,4992,200,4896,200C4800,200,4704,200,4608,200C4512,200,4416,200,4320,200C4224,200,4128,200,4032,200C3936,200,3840,200,3744,200C3648,200,3552,200,3456,200C3360,200,3264,200,3168,200C3072,200,2976,200,2880,200C2784,200,2688,200,2592,200C2496,200,2400,200,2304,200C2208,200,2112,200,2016,200C1920,200,1824,200,1728,200C1632,200,1536,200,1440,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"></path></svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L60,245.3C120,235,240,213,360,224C480,235,600,277,720,293.3C840,309,960,299,1080,277.3C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
        {/* </section> */}

        {/* <section className="section section--gradient has-background-morninglight"> */}
        <div class="hero-body">
          <p class="title">{heading}</p>
          <p class="subtitle">{description}</p>
          <Link
            className="button is-primary is-medium"
            to="https://square.site/book/FF347440VY7EP/desire-radiant-health"
          >
            Book a Session
          </Link>
        </div>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  {/* <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div> */}
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link
                        className="button is-primary is-medium"
                        to="/services"
                      >
                        See All Nutrition Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg id="wave" style={{transform:"rotate(0deg);", transition: "0.3s"}} viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(190.018, 0, 244.034, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 0)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,32L120,48C240,64,480,96,720,93.3C960,91,1200,53,1440,48C1680,43,1920,69,2160,66.7C2400,64,2640,32,2880,32C3120,32,3360,64,3600,66.7C3840,69,4080,43,4320,32C4560,21,4800,27,5040,40C5280,53,5520,75,5760,74.7C6000,75,6240,53,6480,58.7C6720,64,6960,96,7200,90.7C7440,85,7680,43,7920,45.3C8160,48,8400,96,8640,109.3C8880,123,9120,101,9360,101.3C9600,101,9840,123,10080,120C10320,117,10560,91,10800,80C11040,69,11280,75,11520,64C11760,53,12000,27,12240,18.7C12480,11,12720,21,12960,26.7C13200,32,13440,32,13680,45.3C13920,59,14160,85,14400,98.7C14640,112,14880,112,15120,112C15360,112,15600,112,15840,109.3C16080,107,16320,101,16560,101.3C16800,101,17040,107,17160,109.3L17280,112L17280,160L17160,160C17040,160,16800,160,16560,160C16320,160,16080,160,15840,160C15600,160,15360,160,15120,160C14880,160,14640,160,14400,160C14160,160,13920,160,13680,160C13440,160,13200,160,12960,160C12720,160,12480,160,12240,160C12000,160,11760,160,11520,160C11280,160,11040,160,10800,160C10560,160,10320,160,10080,160C9840,160,9600,160,9360,160C9120,160,8880,160,8640,160C8400,160,8160,160,7920,160C7680,160,7440,160,7200,160C6960,160,6720,160,6480,160C6240,160,6000,160,5760,160C5520,160,5280,160,5040,160C4800,160,4560,160,4320,160C4080,160,3840,160,3600,160C3360,160,3120,160,2880,160C2640,160,2400,160,2160,160C1920,160,1680,160,1440,160C1200,160,960,160,720,160C480,160,240,160,120,160L0,160Z"></path></svg>
      </section>

      <FullWidthImage
        img={fullWidthImage}
        objectFit={"contain"}
        imgPosition={"bottom"}

      />




      <div class="header">

{/* 
<div class="inner-header flex flex-direction-column">

<svg version="1.1" class="logo" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xmlSpace="preserve">
<path fill="#FFFFFF" stroke="#000000" stroke-width="10" stroke-miterlimit="10" d="M57,283" />
<g><path fill="#fff"
d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4
C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7		c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2	c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z" />
</g>
</svg>
<h1>Now Accepting</h1><br/>
<h2>Detox Program</h2>
</div> */}

<div id="mailer-form">
</div>

<div className="content flex flex-direction-column">
  <h2 style={{marginTop: "2em"}}>Register Now</h2>
  {/* <div className="control has-icons-left has-icons-right">
  <input className="input is-medium" type="email" placeholder="Email" />
  <span className="icon is-left">
    <i className="fas fa-envelope"></i>
  </span>
  <span className="icon is-right">
    <i className="fas fa-check"></i>
  </span>
</div> */}



<div class="klaviyo-form-VGUCps"></div>

</div>


<div>
<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>


<section className="section section--gradient p-0">
      <svg id="wave" style={{transform: "rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(190.018, 0, 244.034, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 0)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,32L120,48C240,64,480,96,720,93.3C960,91,1200,53,1440,48C1680,43,1920,69,2160,66.7C2400,64,2640,32,2880,32C3120,32,3360,64,3600,66.7C3840,69,4080,43,4320,32C4560,21,4800,27,5040,40C5280,53,5520,75,5760,74.7C6000,75,6240,53,6480,58.7C6720,64,6960,96,7200,90.7C7440,85,7680,43,7920,45.3C8160,48,8400,96,8640,109.3C8880,123,9120,101,9360,101.3C9600,101,9840,123,10080,120C10320,117,10560,91,10800,80C11040,69,11280,75,11520,64C11760,53,12000,27,12240,18.7C12480,11,12720,21,12960,26.7C13200,32,13440,32,13680,45.3C13920,59,14160,85,14400,98.7C14640,112,14880,112,15120,112C15360,112,15600,112,15840,109.3C16080,107,16320,101,16560,101.3C16800,101,17040,107,17160,109.3L17280,112L17280,160L17160,160C17040,160,16800,160,16560,160C16320,160,16080,160,15840,160C15600,160,15360,160,15120,160C14880,160,14640,160,14400,160C14160,160,13920,160,13680,160C13440,160,13200,160,12960,160C12720,160,12480,160,12240,160C12000,160,11760,160,11520,160C11280,160,11040,160,10800,160C10560,160,10320,160,10080,160C9840,160,9600,160,9360,160C9120,160,8880,160,8640,160C8400,160,8160,160,7920,160C7680,160,7440,160,7200,160C6960,160,6720,160,6480,160C6240,160,6000,160,5760,160C5520,160,5280,160,5040,160C4800,160,4560,160,4320,160C4080,160,3840,160,3600,160C3360,160,3120,160,2880,160C2640,160,2400,160,2160,160C1920,160,1680,160,1440,160C1200,160,960,160,720,160C480,160,240,160,120,160L0,160Z"></path></svg>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest Posts
                    </h3>
                    <BlogRoll />

                    <div className="column is-12 has-text-centered">
                      <Link className="button is-primary is-medium" to="/blog">
                        Read More Posts
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




</div>





      {/* <svg id="wave" style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 410" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(235, 255, 252, 1)" offset="0%"></stop><stop stop-color="rgba(0, 0, 0, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,41L60,68.3C120,96,240,150,360,143.5C480,137,600,68,720,61.5C840,55,960,109,1080,157.2C1200,205,1320,246,1440,225.5C1560,205,1680,123,1800,82C1920,41,2040,41,2160,54.7C2280,68,2400,96,2520,88.8C2640,82,2760,41,2880,47.8C3000,55,3120,109,3240,129.8C3360,150,3480,137,3600,116.2C3720,96,3840,68,3960,54.7C4080,41,4200,41,4320,82C4440,123,4560,205,4680,225.5C4800,246,4920,205,5040,191.3C5160,178,5280,191,5400,184.5C5520,178,5640,150,5760,177.7C5880,205,6000,287,6120,321.2C6240,355,6360,342,6480,328C6600,314,6720,301,6840,246C6960,191,7080,96,7200,61.5C7320,27,7440,55,7560,102.5C7680,150,7800,219,7920,232.3C8040,246,8160,205,8280,157.2C8400,109,8520,55,8580,27.3L8640,0L8640,410L8580,410C8520,410,8400,410,8280,410C8160,410,8040,410,7920,410C7800,410,7680,410,7560,410C7440,410,7320,410,7200,410C7080,410,6960,410,6840,410C6720,410,6600,410,6480,410C6360,410,6240,410,6120,410C6000,410,5880,410,5760,410C5640,410,5520,410,5400,410C5280,410,5160,410,5040,410C4920,410,4800,410,4680,410C4560,410,4440,410,4320,410C4200,410,4080,410,3960,410C3840,410,3720,410,3600,410C3480,410,3360,410,3240,410C3120,410,3000,410,2880,410C2760,410,2640,410,2520,410C2400,410,2280,410,2160,410C2040,410,1920,410,1800,410C1680,410,1560,410,1440,410C1320,410,1200,410,1080,410C960,410,840,410,720,410C600,410,480,410,360,410C240,410,120,410,60,410L0,410Z"></path></svg> */}
      {/* <svg id="wave" style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 410" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,205L60,198.2C120,191,240,178,360,198.2C480,219,600,273,720,307.5C840,342,960,355,1080,321.2C1200,287,1320,205,1440,191.3C1560,178,1680,232,1800,232.3C1920,232,2040,178,2160,184.5C2280,191,2400,260,2520,259.7C2640,260,2760,191,2880,177.7C3000,164,3120,205,3240,205C3360,205,3480,164,3600,184.5C3720,205,3840,287,3960,314.3C4080,342,4200,314,4320,300.7C4440,287,4560,287,4680,252.8C4800,219,4920,150,5040,157.2C5160,164,5280,246,5400,287C5520,328,5640,328,5760,287C5880,246,6000,164,6120,157.2C6240,150,6360,219,6480,211.8C6600,205,6720,123,6840,88.8C6960,55,7080,68,7200,75.2C7320,82,7440,82,7560,123C7680,164,7800,246,7920,239.2C8040,232,8160,137,8280,82C8400,27,8520,14,8580,6.8L8640,0L8640,410L8580,410C8520,410,8400,410,8280,410C8160,410,8040,410,7920,410C7800,410,7680,410,7560,410C7440,410,7320,410,7200,410C7080,410,6960,410,6840,410C6720,410,6600,410,6480,410C6360,410,6240,410,6120,410C6000,410,5880,410,5760,410C5640,410,5520,410,5400,410C5280,410,5160,410,5040,410C4920,410,4800,410,4680,410C4560,410,4440,410,4320,410C4200,410,4080,410,3960,410C3840,410,3720,410,3600,410C3480,410,3360,410,3240,410C3120,410,3000,410,2880,410C2760,410,2640,410,2520,410C2400,410,2280,410,2160,410C2040,410,1920,410,1800,410C1680,410,1560,410,1440,410C1320,410,1200,410,1080,410C960,410,840,410,720,410C600,410,480,410,360,410C240,410,120,410,60,410L0,410Z"></path></svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L60,245.3C120,235,240,213,360,224C480,235,600,277,720,293.3C840,309,960,299,1080,277.3C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  useScript(
    "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XYL3Xn",
    "mailer-form"
  );
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        fullImage={frontmatter.full_image}
        fullImage2={frontmatter.full_image2}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: FULL_WIDTH)
              }
            }
            text
            link {
              url
              text
            }
          }
          heading
          description
        }
        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        full_image2 {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
