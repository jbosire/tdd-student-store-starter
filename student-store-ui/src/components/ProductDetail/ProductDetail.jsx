import * as React from "react";
import "./ProductDetail.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import ProductView from "../ProductView/ProductView";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function ProductDetail(props) {
  console.log(props.shoppingCart);
  const [product, setProduct] = useState(null);
  let { productId } = useParams();

  useEffect(async () => {
    let url =
      `https://codepath-store-api.herokuapp.com/store` + `/` + productId;

    try {
      let response = await axios.get(url);
      let responseData = response.data.product;
      console.log(responseData);

      setProduct(responseData);
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (product === null) {
    return <NotFound />;
  }
  //console.log(product);

  return (
    <div className="product-detail">
      <Navbar />
      <Sidebar />
      <ProductView
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
        shoppingCart={props.shoppingCart}
      />
    </div>
  );
}
