import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import { Product } from "../components/Product";

export default () => (
  <StaticQuery
    query={graphql`
      query aboutQuery {
        about: datoCmsAbout {
          info
          id
          photo {
            uploadId {
              url
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
          <h1>poopy poopy about</h1>
          <p>{JSON.stringify(about)}</p>

      </Layout>
    )}
  />
);
