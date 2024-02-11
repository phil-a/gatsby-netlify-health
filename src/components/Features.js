import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column flex is-6 p-5">
        <section className="section flex-column justify-content-between p-0 service-card" style={{position: "relative"}}>
          <div className="p-5 has-text-centered">
            <div
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="p-5"><p>{item.text}</p></div>
          <div className="p-5">
            <Link to={item.link.url} className="button is-primary" style={{width: "100%", height: "50px"}}>
              {item.link.text}
            </Link>
          </div>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
