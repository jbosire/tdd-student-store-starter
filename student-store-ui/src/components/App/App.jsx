import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import AboutUs from "../AboutUs/AboutUs"
import BuyNow from "../BuyNow/BuyNow"
import ContactUs from "../ContactUs/ContactUs"
import NotFound from "../NotFound/NotFound"
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"



export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        

           
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />


        </Routes>
          
          {/* YOUR CODE HERE! */}
          
          <Navbar />
          <Sidebar />
          <Home />
          
        </main>
        
      </BrowserRouter>
    </div>
  )
}
