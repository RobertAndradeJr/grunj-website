import React, { useState } from "react";
import Img from "gatsby-image";

export default ({ node: { edges } }) =>
  edges.map(({ node: { id, title, description, content } }) => {
    const [page, setPage] = useState(0);
    const currentImage = content[page].sizes;
    const imagesLength = content.length - 1;

    const incrementPage = () =>
      content[page + 1] ? setPage(page + 1) : setPage(0);

    const decrementPage = () =>
      page > 0 ? setPage(page - 1) : setPage(imagesLength);

    const GalleryButtons = () =>
      imagesLength ? (
        <>
          <button onClick={decrementPage}>-</button>
          <button onClick={incrementPage}>+</button>
        </>
      ) : null;

    return (
      <article className="portfolio" key={id}>
        <h1>{title}</h1>
        <Img sizes={currentImage} />
        <GalleryButtons />
        <p>{description}</p>
      </article>
    );
  });
