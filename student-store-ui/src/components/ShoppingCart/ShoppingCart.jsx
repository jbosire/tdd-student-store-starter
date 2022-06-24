import * as React from "react";
import "./ShoppingCart.css";
import { useState } from "react";

export default function ShoppingCart(props) {
  var totPrice = 0;
  props.shoppingCart.forEach((item) => {
    totPrice +=
      props.products.find((elem) => elem.id === item.itemId).price *
      item.quantity;
  });

  var taxes = totPrice * 0.0875;

  

  return (
    <div className="shopping-cart">
      <div className={props.isOpen ? "open" : "closed"}>
        <h3>
          Shopping Cart
          <span className="icon">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>
        <div className="CartTable">
          <div className="header">
            <div className="header-row">
              <span className="flex-2">Name</span>
              <span className="center">Quantity</span>
              <span className="center">Unit Price</span>
              <span className="center">Cost</span>
            </div>

            {props.shoppingCart.map((item, idx) => (
              <div className="product-row">
                <span className="flex-2 cart-product-name">
                  {props.products.find((elem) => elem.id === item.itemId).name}
                </span>
                <span className="center cart-product-quantity">
                  {item.quantity}
                </span>
                <span className="center cart-product-price">
                {"$" + props.products.find((elem) => elem.id === item.itemId).price}
                </span>
                <span className="center cart-product-subtotal">
                 {"$" + item.quantity *
                    props.products.find((elem) => elem.id === item.itemId)
                      .price}
                </span>
              </div>
            ))}
          </div>
          <div className="receipt">
            <div className="receipt-subtotal">
              <span className="label">Subtotal</span>
              <span></span>
              <span></span>
              <span className="center subtotal">{"$" + totPrice}</span>
            </div>
            <div className="receipt-taxes">
              <span className="label">Taxes and Fees</span>
              <span></span>
              <span></span>
              <span className="center">{"$" + taxes}</span>
            </div>
            <div className="receipt-total">
              <span className="label">Total</span>
              <span></span>
              <span></span>
              <span className="center total-price">{"$" + totPrice + taxes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
