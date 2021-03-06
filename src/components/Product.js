import React from "react";
import Img from "gatsby-image";
import { parseMoney } from "../util/Numbers";
import { websiteURL } from "../util/Domain";

export default ({ node: { id, price, image, name } }) => (
  <div className="Catalogue__item" key={id}>
    <div>
      <div className="Product__image">
        <Img sizes={image.sizes} />
      </div>{" "}
      <div className="Product__details">
        <div className="Product__name">
          {name}
          <div className="Product__price">{parseMoney(price)}</div>
        </div>
        <button
          className="Product__buy Product snipcart-add-item"
          data-item-id={id}
          data-item-price={price}
          data-item-image={image.url}
          data-item-name={name}
          data-item-url={websiteURL}
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
);
