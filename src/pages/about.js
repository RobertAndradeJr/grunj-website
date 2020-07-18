import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import About from "../components/About";

export default () => (
  <StaticQuery
    query={graphql`
      query aboutQuery {
        about: datoCmsAbout {
          info
          id
          name
          photo {
            url
            sizes(maxWidth: 450) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={({ site, about }) => (
      <Layout site={site}>
        <About node={about} />
      </Layout>
    )}
  />
);
