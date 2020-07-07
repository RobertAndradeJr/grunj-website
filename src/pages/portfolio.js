import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";

export default () => (
  <StaticQuery
    query={graphql`
      query portfolioQuery {
        portfolio: allDatoCmsPortfolio {
          edges {
            node {
              id
              description
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
      <p>{JSON.stringify(portfolio)}</p>
      </Layout>
    )}
  />
);
