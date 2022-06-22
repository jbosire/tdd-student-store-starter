import * as React from "react";
import "./ProductGrid.css";
import "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  return (
    <div className="product-grid">
      {props.products.map((product, idx) => (
        <ProductCard
          product={product}
          productId={5}
          quantity={5}
          handleAddItemToCart={props.handleAddItemToCart}
          handleRemoveItemFromCart={props.handleRemoveItemFromCart}
          showDescription={true}
          key={idx}
        />
      ))}
    </div>
  );
}
