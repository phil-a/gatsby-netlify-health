import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import useMousePosition from "../hooks/useMousePosition";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { invert } from "lodash";

export default function FullWidthImage(props) {

  const mousePosition = useMousePosition();
  const scrollPosition = useScrollPosition();
  const { windowHeight, windowWidth } = useWindowDimensions();
  // const backgroundPosition = `center ${mousePosition.x / 4}%`;
  // const blurFilter = `blur(${Math.min(5, 1 - (mousePosition.x - (windowWidth / 2)))}px)`
  const blurFilter = `blur(${Math.min(5, Math.abs((mousePosition.x - (windowWidth / 2)))/100)}px)`
  const perspective = "perspective(1000px) "
  + ` rotateX(${(mousePosition.y - (windowHeight/2))/20}deg) rotateY(${(mousePosition.x - (windowWidth/2))/100}deg)`
  const shadow = `rgba(255, 255, 255, 0.6) ${((mousePosition.x - (windowWidth/2))/40)+2}px ${((mousePosition.y - (windowHeight/2))/20)+2}px 100px, rgba(255, 237, 160, 0.9) ${((mousePosition.x - (windowWidth/2))/40)+2}px ${((mousePosition.y - (windowHeight/2))/20)+2}px 25px`
  const {
    height = 400,
    img,
    title,
    titleBackground = "rgba(255,255,255, 0)",
    titleForeground = "rgba(255,255,255, 1)",
    subheading,
    imgPosition = "top left",
    objectFit = "cover",
    hasGradient = false
  } = props;
  return (
    <div className="float-title bulma-overlay-mixin-parent">
      
    <React.Fragment>
      <div
        className="margin-top-0"
        id="ex1"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={objectFit}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={objectFit}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
              minHeight: height,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
              zIndex: 2
            }}
          >
            {title && (
              <div>
              <h1
                id="index-main-header"
                className="has-text-centered has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  // backdropFilter: `${blurFilter} brightness(160%)`,
                  // backdropFilter: ``,
                  top: "0px",
                  // backgroundPosition: backgroundPosition,
                  // transform: perspective,
                  transform: 0,
                  boxShadow:
                  shadow,
                    // "5px 5px 8px rgba(0,0,0,0.2)",
                  textShadow: "2px 2px 8px rgba(0,0,0,1)",
                  background: titleBackground,
                  backgroundSize: "100% 100%",
                  color: titleForeground,
                  lineHeight: "1",
                  padding: "0.5em 1em",
                  zIndex: "2",
                  maxWidth: "720px",
                  borderRadius: "20px",
                }}
              >
                {title}
              </h1>
              </div>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    "rgb(255,255,255) 0.5rem 0px 0px, rgb(255,255,255) -0.5rem 0px 0px",
                  backgroundColor: "rgb(255,255,255)",
                  color: "black",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                  zIndex: "2",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
    {hasGradient && (
      <div>
        <div id="gradient" className="bulma-overlay-mixin"></div>
        <svg id="wave" style={{marginTop: "-390px", transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 260" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 0.5)" offset="100%"></stop></linearGradient></defs><path style={{transform: "translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,26L80,56.3C160,87,320,147,480,177.7C640,208,800,208,960,195C1120,182,1280,156,1440,125.7C1600,95,1760,61,1920,43.3C2080,26,2240,26,2400,60.7C2560,95,2720,165,2880,199.3C3040,234,3200,234,3360,225.3C3520,217,3680,199,3840,164.7C4000,130,4160,78,4320,60.7C4480,43,4640,61,4800,60.7C4960,61,5120,43,5280,60.7C5440,78,5600,130,5760,130C5920,130,6080,78,6240,56.3C6400,35,6560,43,6720,60.7C6880,78,7040,104,7200,112.7C7360,121,7520,113,7680,91C7840,69,8000,35,8160,21.7C8320,9,8480,17,8640,26C8800,35,8960,43,9120,78C9280,113,9440,173,9600,190.7C9760,208,9920,182,10080,160.3C10240,139,10400,121,10560,95.3C10720,69,10880,35,11040,56.3C11200,78,11360,156,11440,195L11520,234L11520,260L11440,260C11360,260,11200,260,11040,260C10880,260,10720,260,10560,260C10400,260,10240,260,10080,260C9920,260,9760,260,9600,260C9440,260,9280,260,9120,260C8960,260,8800,260,8640,260C8480,260,8320,260,8160,260C8000,260,7840,260,7680,260C7520,260,7360,260,7200,260C7040,260,6880,260,6720,260C6560,260,6400,260,6240,260C6080,260,5920,260,5760,260C5600,260,5440,260,5280,260C5120,260,4960,260,4800,260C4640,260,4480,260,4320,260C4160,260,4000,260,3840,260C3680,260,3520,260,3360,260C3200,260,3040,260,2880,260C2720,260,2560,260,2400,260C2240,260,2080,260,1920,260C1760,260,1600,260,1440,260C1280,260,1120,260,960,260C800,260,640,260,480,260C320,260,160,260,80,260L0,260Z"></path></svg>
      </div>
    )}
    </div>
    
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
