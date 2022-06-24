import * as React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView(props) {
  console.log(props.shoppingCart);
  console.log(props.product);
  return (
    <div className="wrapper">
      <div className="product-view">
        <h1 className="product-id">Product # {props.productId} </h1>
        <ProductCard
          quantity={props.quantity}
          productId={props.product.id}
          product={props.product}
          shoppingCart={props.shoppingCart}
          handleAddItemToCart={props.handleAddItemToCart}
          handleRemoveItemFromCart={props.handleRemoveItemFromCart}
          showDescription={false}
          key={props.productId}
        />
      </div>
    </div>
  );
}
