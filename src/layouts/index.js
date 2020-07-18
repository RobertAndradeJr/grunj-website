import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import "../style/index.scss";

const Layout = ({
  children,
  site: {
    siteMetadata: { siteName },
  },
}) => (
  <div>
    <Helmet title="Grungly's Art Dungly" />
    <div className="Container">
      <div className="Header">
        <div className="Wrap">
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={siteName} to="/">
                {siteName}
              </Link>
            </h1>
            <div className="Header__summary snipcart-summary snipcart-checkout">
              <div className="Header__summary__title">🛍 MY CART 🛍</div>
              <div className="Header__summary__line">
                Number of items: <span className="snipcart-total-items" />
              </div>
              <div className="Header__summary__line">
                Total price: <span className="snipcart-total-price" />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <h3>
            <Link to="/">home</Link>
          </h3>
          <h3>
            <Link to="/portfolio">portfolio</Link>
          </h3>
          <h3>
            <Link to="/about">about</Link>
          </h3>
        </div>
      </div>
      <div className="Wrap">{children}</div>
      <div className="Wrap">
        <div className="Footer">
          <a href="https://www.gatsbyjs.org/">Gatsby</a>,{" "}
          <a href="https://snipcart.com/">Snipcart</a> and{" "}
          <a href="https://www.datocms.com">DatoCMS</a>.
        </div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
