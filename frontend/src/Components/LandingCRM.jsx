import React, { Component } from "react";
import "./LandingCRM.css";
import TeamOverview from "./TeamOverview";
import Navbar from "./Navbar";

class LandingCRM extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="textBox">
          <div className="heading">Good morning, Tim</div>
          <div className="subheading">Let's get the day started!</div>
          <TeamOverview />
        </div>
      </div>
    );
  }
}

export default LandingCRM;
