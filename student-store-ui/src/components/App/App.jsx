import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  var item = {
    itemId: 4,
    quantity: 2,
  };

  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setcheckoutForm] = useState(null);

  useEffect(async () => {
    let url = `https://codepath-store-api.herokuapp.com/store`;

    try {
      let response = await axios.get(url);
      let responseData = response.data;
      setProducts(responseData.products);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }, []);

  const handleAddItemToCart = (productId) => {
    var newItem;
    var newCart = [];

    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        newItem = {
          itemId: productId,
          quantity: shoppingCart[i].quantity + 1,
        };

        newCart.concat(newItem);
      } else if (i === shoppingCart.length - 1) {
        newItem = {
          itemId: productId,
          quantity: 1,
        };

        newCart.concat(newItem);
      }
    }

    setShoppingCart(newCart);
  };

  const handleRemoveItemFromCart = (productId) => {
    var newItem;
    var newCart = [];

    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        var newQty = shoppingCart[i].quantity - 1;
        if (newQty > 0) {
          newItem = {
            itemId: productId,
            quantity: newQty,
          };
          // shoppingCart.find()

          newCart.concat(newItem);
        }
      }
    }

    setShoppingCart(newCart);
  };
  var cat = [];
  cat.push(item);
  //  console.log(item);
  const res = products.find(({ id }) => id === item.itemId);
  console.log(res);

  // console.log(shoppingCart);

  const handleOnToggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleOnCheckoutFormChange = (name, value) => {};

  const handleOnSubmitCheckoutForm = () => {};

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleOnToggle={handleOnToggle}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnCheckoutFormChange}
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  isOpen={isOpen}
                  checkoutForm={checkoutForm}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={() => handleAddItemToCart()}
                  handleRemoveItemFromCart={() => handleRemoveItemFromCart()}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
