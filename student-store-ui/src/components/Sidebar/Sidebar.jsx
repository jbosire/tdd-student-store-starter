import * as React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <section className={props.isOpen ? "sidenav open" : "sidenav closed"}>
        <div className="allitems">
          
        <button
          className={
            props.isOpen ? "toggle-button open" : "toggle-button closed"
          }
          onClick={props.handleOnToggle}
        >
          <i className="material-icons md-48">arrow_forward</i>
        
        </button>
        </div>
      </section>
    </section>
  );
}
