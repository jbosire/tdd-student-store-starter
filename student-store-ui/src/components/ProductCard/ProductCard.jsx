import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <p className="product-name">{props.product.name}</p>
      <p className="product-price"> {"$" + props.product.price}</p>
      {props.showDescription ? (
        <p className="product-description">{props.product.description}</p>
      ) : null}
      <div className="media">
        <Link to={"/products/" + props.product.id}>
          <img src={props.product.image} />
        </Link>
      </div>
      <button className="add" onClick={() => props.handleAddItemToCart(props.product.id)}>
        {" "}
        Add stuff
      </button>
      <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.product.id)}>
        {" "}
        Remove stuff
      </button>
    </div>
  );
}
