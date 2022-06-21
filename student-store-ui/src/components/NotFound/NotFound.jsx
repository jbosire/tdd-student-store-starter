import * as React from "react"
import "./NotFound.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

export default function NotFound(){
    return (
        <div className="notFound">
            <p>Error 404: NOT FOUND</p>
            <Navbar />
            <Sidebar />
            </div>
            )
}