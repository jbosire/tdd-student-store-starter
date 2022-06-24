import * as React from "react";
import "./ShoppingCart.css";
import { useState } from "react";

export default function ShoppingCart(props) {
  return (
    <div className="shoppingCart">
      <div className={props.isOpen ? "open" : "closed"}>
        <h3>
          Shopping Cart
          <span>
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
                  {props.products.find((elem) => elem.id === item.itemId).price}
                </span>
                <span className="center cart-product-subtotal">
                  {item.quantity *
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
              <span className="center subtotal"></span>
            </div>
            <div className="receipt-taxes">
              <span className="label">Taxes and Fees</span>
              <span></span>
              <span></span>
              <span className="center"></span>
            </div>
            <div className="receipt-total">
              <span className="label">Total</span>
              <span></span>
              <span></span>
              <span className="center total-price"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
