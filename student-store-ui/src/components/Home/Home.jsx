import * as React from "react"
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

export default function Home() {
  return (
    <div className="home">
      <p>Home</p>
      <Navbar />
      <Sidebar />
    </div>
  )
}
