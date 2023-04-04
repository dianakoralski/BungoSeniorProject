import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="header">
        <span className="active">Noatanga</span>
        <span>Inbox</span>
        <span>Events</span>
        <span>Calendar</span>
        <span>Clients</span>
        <span>My Sales</span>
        <span>Templates</span>
      </nav>
    );
  }
}

export default Navbar;
