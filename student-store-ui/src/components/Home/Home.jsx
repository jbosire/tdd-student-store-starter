import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home(props) {
  return (
    <div className="home">
      <Navbar />
      <Sidebar handleOnCheckOutFormChange={props.handleOnCheckOutFormChange} handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm} handleOnToggle={props.handleOnToggle} checkoutForm={props.checkoutForm} isOpen={props.isOpen} shoppingCart={props.shoppingCart} products={props.products}/>
      <Hero />
      <ProductGrid
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}

      />
    </div>
  );
}
