import React, { Component } from "react";
import "./Signup.css";
import { Input } from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import RegisterUser from "./RegisterUser";
import PasswordInput from "./PasswordInput";
import Navbar from "./Navbar";

let lengthCheck = new RegExp("(?=.{12,})");
let upperChar = new RegExp("(?=.*[A-Z])");
let numChar = new RegExp("(?=.*[0-9])");
let specialChar = new RegExp("(?=.*[^A-Za-z0-9])");

function passwordChecker(password) {
  if (!lengthCheck.test(password)) {
    console.log("Must be at least 12 characters");
    document.getElementById("error").innerHTML =
      "Must be at least 12 characters";
  }
  if (!upperChar.test(password)) {
    console.log("Must have at least one uppercase letter");
    document.getElementById("error").innerHTML =
      "Must have at least one uppercase letter";
  }
  if (!numChar.test(password)) {
    console.log("Must have at least one number");
    document.getElementById("error").innerHTML =
      "Must have at least one number";
  }
  if (!specialChar.test(password)) {
    console.log(
      "Must have at least one special character (i.e. @  !  #  $  %  ^  &  *)"
    );
    document.getElementById("error").innerHTML =
      "Must have at least one special character (i.e. @  !  #  $  %  ^  &  *)";
  }
}

class Signup extends Component {
  state = { phone: "" };

  handleOnChange = (value) => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = this.state.phone;
    const newUser = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };
    if (name === "") {
      //console.log("No name provided");
      document.getElementById("error").innerHTML = "No name provided";
    } else if (email === "") {
      //console.log("No email provided");
      document.getElementById("error").innerHTML = "No email provided";
    } else if (password === "") {
      //console.log("No password provided");
      document.getElementById("error").innerHTML = "No password provided";
    } else {
      passwordChecker(document.getElementById("password").value);
    }
    RegisterUser(newUser);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="signUpBox">
          <div className="heading">Create an account</div>
          <h1>Name*</h1>
          <Input id="name" placeholder="Lestor Martinez" />
          <h1>Email*</h1>
          <Input id="email" placeholder="lestor56@gmail.com" />
          <h1>Phone Number (optional)</h1>
          <PhoneInput
            id="phone"
            country={"us"}
            value={this.state.phone}
            onChange={(phone) => this.setState({ phone })}
          />
          <h1>Password*</h1>
          <PasswordInput />
          <p>
            Create a strong password. We take your privacy and security very
            seriously.
          </p>
          <button className="signupButton" onClick={this.handleClick}>
            Create an account
          </button>
          <div>
            <span className="errorMessage" id="error"></span>
          </div>
          <h2>
            <span>or sign up with</span>
          </h2>
          <div className="iconBox">
            <img
              className="icon"
              src={require("./images/googleicon.jpg")}
              alt="google logo"
            ></img>
            <img
              className="icon"
              src={require("./images/facebooklogo.png")}
              alt="facebook logo"
            ></img>
            <img
              className="icon"
              src={require("./images/instagramlogo.png")}
              alt="instagram logo"
            ></img>
            <img
              className="icon"
              src={require("./images/tiktoklogo.png")}
              alt="tiktok logo"
            ></img>
          </div>
          <div className="footerText">
            Already have an account?{" "}
            <button className="underlineButton"> Login</button>{" "}
          </div>
          <div className="footerText">
            By creating an account, you are agreeing to our{" "}
            <button className="underlineButton">Privacy Policy</button> and{" "}
            <button className="underlineButton">Terms of Use</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
