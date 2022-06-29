import * as React from "react";
import "./CheckoutForm.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CheckoutForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [justSubmitted, setJustSubmitted] = useState(false)
  const [disable, setDisable] = useState(false)

  const handleOnEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOnNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOnCheckOut = () => {
    var userInfo = {
      name: name,
      email: email,
    };
    axios.post(`http://localhost:3001/store`, {
      shoppingCart: props.shoppingCart,
      user: userInfo,
    });

    
    props.setShoppingCart([])
    document.getElementById("nameInput").value = "";
    document.getElementById("email").value = "";

  };



  return (
    <div className={props.isOpen ? "checkout-form" : "checkout-form closed"}>
      <h3>
        Payment Info
        <span>
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control">
          <input
          id="nameInput"
            name="name"
            className="checkout-form-input"
            type="text"
            placeholder="Student Name"
            onChange={handleOnNameChange}
      //      value={justSubmitted ? "" : null}
          />
        </div>
      </div>
      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input
          id="email"
            name="email"
            className="checkout-form-input"
            type="email"
            placeholder="student@codepath.org"
            onChange={handleOnEmailChange}
     //       value={justSubmitted ? "" : null}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input name="termsAndConditions" type="checkbox" />
            <span className="label">
              {"I agree to the "}
              <a
                className="terms"
                href="https://codepath-student-store-demo.surge.sh/#terms-and-conditions"
              >
                terms and conditions
              </a>
            </span>
          </label>
        </div>
      </div>
      <p className="is-danger"></p>
      <div className="field">
        <div className="control">
          <button className="button checkout-button" disabled={props.shoppingCart.length ? false : true} onClick={handleOnCheckOut}>
            Checkout
          </button>
        </div>
      </div>
      <div className="checkout-success">
        <h3>
          Checkout Info
          <span className="icon">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="content">
          <p>
            A confirmation email will be sent to you to confirm receipt of this
            order. Once confirmed, the order will be delivered to your residence
          </p>
        </div>
      </div>
    </div>
  );
}
