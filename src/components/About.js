import React from "react";
import Img from "gatsby-image";

export default ({ node: { name, photo, info } }) => (
  <article className="about">
    <h1>poopy poopy about</h1>
    <h3>{name}</h3>
    <Img sizes={photo.sizes} />
    <p>{info}</p>
  </article>
);
