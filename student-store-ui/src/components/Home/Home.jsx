import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import { useState } from "react";

export default function Home(props) {
  const [open, setOpen] = useState(true);
  const [all, setAll] = useState(null);
  const [clothing, setClothing] = useState(null);
  const [food, setFood] = useState(null);
  const [accessories, setAccessories] = useState(null);
  const [tech, setTech] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleOnTextChange = (event) => {
    setSearchText(event.target.value);
    console.log(searchText);
  };

  var searchItems = props.products.filter((datum) => {
    return datum.name.toLowerCase().includes(searchText.toLowerCase());
  });

  if (selectedCategory != "") {
    searchItems = searchItems.filter((datum) => {
      return datum.category === selectedCategory;
    });
  }

  const handleToggle = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleAll = () => {
    if (all) {
      setAll(false);
    } else {
      setAll(true);
      setClothing(false);
      setFood(false);
      setTech(false);
      setAccessories(false);
      setSelectedCategory("");
    }
  };
  const handleClothing = () => {
    if (clothing) {
      setClothing(false);
    } else {
      setClothing(true);
      setAll(false);

      setFood(false);
      setTech(false);
      setAccessories(false);
      setSelectedCategory("clothing");
    }
  };
  const handleFood = () => {
    if (food) {
      setFood(false);
    } else {
      setFood(true);
      setAll(false);
      setClothing(false);

      setTech(false);
      setAccessories(false);
      setSelectedCategory("food");
    }
  };
  const handleAccessories = () => {
    if (accessories) {
      setAccessories(false);
    } else {
      setAccessories(true);
      setAll(false);
      setClothing(false);
      setFood(false);
      setTech(false);
      setSelectedCategory("accessories");
    }
  };
  const handleTech = () => {
    if (tech) {
      setTech(false);
    } else {
      setTech(true);
      setAll(false);
      setClothing(false);
      setFood(false);

      setAccessories(false);
      setSelectedCategory("tech");
    }
  };

  return (
    <div className="home">
      <Navbar />
      <Sidebar
        handleOnCheckOutFormChange={props.handleOnCheckOutFormChange}
        handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
        handleOnToggle={props.handleOnToggle}
        checkoutForm={props.checkoutForm}
        isOpen={props.isOpen}
        shoppingCart={props.shoppingCart}
        products={props.products}
      />
      <Hero />
      <nav className="sub-navbar">
        <div className="content">
          <div className="row">
            <div className="search-bar">
              <input
                type="text"
                name="search"
                placeholder="Search"
                onChange={handleOnTextChange}
              />
              <i className="material-icons">search</i>
            </div>
            <div className="links">
              <span className="help">
                <i className="material-icons">help</i>
                Help
              </span>
              <div className="cart">
                <a href="/">
                  My Cart
                  <i className="material-icons">shopping_cart</i>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="hamburger-menu">
              <i className="material-icons" onClick={() => handleToggle()}>
                menu
              </i>
            </div>
            <ul
              className={open ? "category-menu open" : "category-menu closed"}
            >
              <li
                className={all ? "is-active" : "is-inactive"}
                onClick={() => handleAll()}
              >
                <button>All Categories</button>
              </li>
              <li
                className={clothing ? "is-active" : "is-inactive"}
                onClick={() => handleClothing()}
              >
                <button>Clothing</button>
              </li>
              <li
                className={food ? "is-active" : "is-inactive"}
                onClick={() => handleFood()}
              >
                <button>Food</button>
              </li>
              <li
                className={accessories ? "is-active" : "is-inactive"}
                onClick={() => handleAccessories()}
              >
                <button>Accessories</button>
              </li>
              <li
                className={tech ? "is-active" : "is-inactive"}
                onClick={() => handleTech()}
              >
                <button>Tech</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ProductGrid
        products={searchItems}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
      />
    </div>
  );
}
