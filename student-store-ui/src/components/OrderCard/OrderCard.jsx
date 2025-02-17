import * as React from "react";
import "./OrderCard.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderCard(props) {

  const handleOnDelete = () => {
    console.log("delete")
    
    axios.delete(`http://localhost:3001/store/orders`);

  };


  return (
    <div className="OrderCard">
      <div className="header">
        <div className="overHeader">
          <div className="ordernumber">Order number {props.purchase.id}</div>
          <div className="name">{props.purchase.name}</div>
          <div className="time">{props.purchase.createdAt}</div>
        </div>
      </div>
      <div className="headerrow">
        <span className="center">Item</span>
        <span className="center">Quantity</span>
        <span className="center">Unit Price</span>
        <span className="center">Cost</span>
      </div>

      {props.purchase.order
        ? props.purchase.order.map((item, idx) => (
            <div className="item-row" key={idx}>
              <span className="center item-name">
                {props.products.find((elem) => elem.id === item.itemId)
                  ? props.products.find((elem) => elem.id === item.itemId).name
                  : null}
              </span>
              <span className="center item-quantity">{item.quantity}</span>
              <span className="center item-price">
                {props.products.find((elem) => elem.id === item.itemId)
                  ? props.products.find((elem) => elem.id === item.itemId).price
                  : null}
              </span>
              <span className="center item-cost">
                {props.products.find((elem) => elem.id === item.itemId)
                  ? props.products.find((elem) => elem.id === item.itemId)
                      .price * item.quantity
                  : null}
              </span>
            </div>
          ))
        : null}
      <div className="summary">
        <div className="subtotals">
          <span className="subtotal">SUBTOTAL</span>
          <span className="subtotalval">{props.purchase.subtotal}</span>
        </div>
        <div className="taxes">
          <span className="tax">TAXES AND FEES</span>
          <span className="taxval">{props.purchase.taxes}</span>
        </div>

        <div className="totals">
          <span className="total">TOTAL</span>
          <span className="totalval">{props.purchase.total}</span>
        </div>
      </div>

      <button
            className="delete"
            onClick={handleOnDelete}
            
          >
            <i className="material-icons md-48">delete</i>
          </button>
    </div>
  );
}
