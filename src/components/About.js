import React from "react";
import Img from "gatsby-image";

export default ({
  node: {
    name,
    photo: { sizes },
    info,
  },
}) => (
  <article className="about">
    <h1 className="about__title">poopy poopy about</h1>
    <div className="about__detail">
      <h3>{name}</h3>
      <p>{info}</p>
    </div>
    <Img className="about__image" sizes={sizes} />
  </article>
);
