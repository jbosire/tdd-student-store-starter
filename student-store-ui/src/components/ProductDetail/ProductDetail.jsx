import * as React from "react"
import "./ProductDetail.css"
import Sidebar from "../Sidebar/Sidebar"
import Navbar from "../Navbar/Navbar"
import {useState} from "react"

export default function ProductDetail(props) {
    const [product,setProduct] = useState(null)
    
    return (
    <div className="product-detail">
        
        <Navbar />
        <Sidebar />
        </div>
    )
    }