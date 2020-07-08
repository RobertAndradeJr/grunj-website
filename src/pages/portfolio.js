import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Portfolio from "../components/Portfolio";

export default () => (
  <StaticQuery
    query={graphql`
      query portfolioQuery {
        portfolio: allDatoCmsPortfolio {
          edges {
            node {
              id
              description
              title
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
    render={({ site, portfolio }) => (
      <Layout site={site}>
          <h1>I like to fart a lot</h1>
          <Portfolio node={portfolio} />
      </Layout>
    )}
  />
);
