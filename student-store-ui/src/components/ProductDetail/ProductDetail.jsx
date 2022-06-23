import * as React from "react";
import "./ProductDetail.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail(props) {
  const [product, setProduct] = useState(null);


  return (
    <div className="product-detail">
      <Navbar />
      <Sidebar />
    </div>
  );
}
