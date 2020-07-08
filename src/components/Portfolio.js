import React from "react";
import Img from "gatsby-image";

export default ({ node }) =>
  node.edges.map((edge) => (
    <article className="about" key={edge.node.id}>
      <h1>{edge.node.title}</h1>
      <p>{JSON.stringify(edge)}</p>
      <p>{edge.node.description}</p>
    </article>
  ));
