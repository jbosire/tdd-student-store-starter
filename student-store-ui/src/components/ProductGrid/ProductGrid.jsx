import * as React from "react";
import "./ProductGrid.css";
import "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  

  return (
    <div className="product-grid">
      {props.products.map((product, idx) => {
        return (
          <ProductCard
            product={product}
            productId={product.id}
            quantity={
              props.shoppingCart.find((item) => item.itemId === product.id)
                ? props.shoppingCart.find((item) => item.itemId === product.id)
                    .quantity
                : null
            }
            handleAddItemToCart={props.handleAddItemToCart}
            handleRemoveItemFromCart={props.handleRemoveItemFromCart}
            showDescription={false}
            key={idx}
            shoppingCart={props.shoppingCart}
          />
        );
      })}
    </div>
  );
}
