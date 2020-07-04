import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import { Product } from "../components/Product";

export default () => (
  <StaticQuery
    query={graphql`
      query aboutQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
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
    render={({ site, products }) => (
      <Layout site={site}>
          <h1>poopy poopy</h1>
      </Layout>
    )}
  />
);
