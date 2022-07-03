import * as React from "react";
import "./Orders.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import OrderCard from "../OrderCard/OrderCard";
import Contact from "../Contact/Contact";
import About from "../About/About";

export default function Orders(props) {
  const [purchases, setPurchases] = useState([]);

  useEffect(async () => {
    let url = `http://localhost:3001/store/orders`;

    try {
      let response = await axios.get(url);
      let data = response.data.purchases;
      setPurchases(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  if(purchases.length === 0){
    return (
        <div className="noItems">
            <Navbar />
            <p>
            Sorry! No orders have been made on this account yet.
            </p>
            <p>
           Navigate to the home page for great deals and items!
            </p>
            <p>
            Have fun shopping!!
            </p>
        </div>
    )
  }

  return (
    <div className="orders">
      <Navbar />

      {purchases.map((purchase, idx) => {
        return <OrderCard purchase={purchase} key={idx} products={props.products}/>;
      })}
      <About />

      <Contact />
    </div>
  );
}
