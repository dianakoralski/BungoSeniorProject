import React, { Component } from "react";
import "./style/Password.css";
import "./style/Field.css";
import checkIcon from "../../images/checkIcon.png";
import crossIcon from "../../images/crossIcon.png";

const regexUpper = new RegExp("^(?=.*?[A-Z])");
const regexDigit = new RegExp("^(?=.*?[0-9])");
const regexSpecialChar = new RegExp("^(?=.*?[#?!@$%^&*-])");
const regexMinLength = new RegExp("^(?=.{12,})");
var displayUpper = crossIcon;
var displayDigit = crossIcon;
var displaySpecialChar = crossIcon;
var displayMinLength = crossIcon;

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  handleValidation() {
    let password = this.state.password;
    if (typeof password !== "undefined") {
      if (password.match(regexMinLength)) {
        document.getElementById("MinLength").style.color = "green";
        displayMinLength = checkIcon;
      } else if (!password.match(regexMinLength)) {
        if (document.getElementById("MinLength") != null) {
          document.getElementById("MinLength").style.color = "black";
        }
        displayMinLength = crossIcon;
      }
      if (password.match(regexUpper)) {
        document.getElementById("UpperChar").style.color = "green";
        displayUpper = checkIcon;
      } else if (!password.match(regexUpper)) {
        if (document.getElementById("UpperChar") != null) {
          document.getElementById("UpperChar").style.color = "black";
        }
        displayUpper = crossIcon;
      }
      if (password.match(regexDigit)) {
        document.getElementById("Digit").style.color = "green";
        displayDigit = checkIcon;
      } else if (!password.match(regexDigit)) {
        if (document.getElementById("Digit") != null) {
          document.getElementById("Digit").style.color = "black";
        }
        displayDigit = crossIcon;
      }
      if (password.match(regexSpecialChar)) {
        document.getElementById("SpecialChar").style.color = "green";
        document.getElementById("SpecialChar2").style.color = "green";
        displaySpecialChar = checkIcon;
      } else if (!password.match(regexSpecialChar)) {
        if (
          (document.getElementById("SpecialChar") != null) &
          (document.getElementById("SpecialChar2") != null)
        ) {
          document.getElementById("SpecialChar").style.color = "black";
          document.getElementById("SpecialChar2").style.color = "black";
        }
        displaySpecialChar = crossIcon;
      }
    }
  }

  handleChange(e) {
    this.setState({
      password: e.target.value,
    });
    this.props.setPassword(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="Field Password">
          <span>Create Password</span>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
          />
          <hr></hr>
        </div>
        <div className="Requirements">
          <span
            className="MinLength"
            id="MinLength"
            onChange={this.handleValidation()}
          >
            <img src={displayMinLength} alt="" />
            Must contain at least 12 characters
          </span>
          <span
            className="UpperChar"
            id="UpperChar"
            onChange={this.handleValidation()}
          >
            <img src={displayUpper} alt="" />
            Must contain at least one uppercase letter
          </span>
          <span className="Digit" id="Digit" onChange={this.handleValidation()}>
            <img src={displayDigit} alt="" />
            Must contain at least one number
          </span>
          <span
            className="SpecialChar"
            id="SpecialChar"
            onChange={this.handleValidation()}
          >
            <img src={displaySpecialChar} alt="" />
            Must contain at least at least one special
          </span>
          <span
            className="SpecialChar2"
            id="SpecialChar2"
            onChange={this.handleValidation()}
          >
            character (i.e. @ ! # $ % ^ & *)
          </span>
        </div>
      </div>
    );
  }
}

export default Password;
