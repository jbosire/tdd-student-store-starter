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
          productId={product.id}
          validQuantity={product.quantity > 0}
          quantity={props.shoppingCart.find(
            ({ itemId }) => itemId === product.id
          )}
          handleAddItemToCart={props.handleAddItemToCart}
          handleRemoveItemFromCart={props.handleRemoveItemFromCart}
          showDescription={false}
          key={idx}
          
        />
      ))}
    </div>
  );
}
