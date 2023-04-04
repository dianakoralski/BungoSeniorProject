import React, { Component } from "react";
import "./Login.css";
import { Input } from "@chakra-ui/react";
import LoginCheck from "./LoginCheck";
import PasswordInput from "./PasswordInput";
import Navbar from "./Navbar";

class Login extends Component {
  /*constructor(props){
        super(props);
        this.state = {
            email: " ",
        }
    }

    handleOnChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };*/

  handleClick = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //const email = "user1@gmail.com";
    //const password = "GhostHunter17";
    LoginCheck(email, password);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="loginBox">
          <div className="heading">Welcome back to Noatanga</div>
          <h3>Email</h3>
          <Input id="email" placeholder="Email" />
          <h3>Password</h3>
          <PasswordInput />
          <p>Forgot Password?</p>
          <button className="button1" onClick={this.handleClick}>
            Log In
          </button>
          <div>
            <div className="errorMessage" id="error"></div>
          </div>
          <h2>
            <span>or login with</span>
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
        </div>
      </div>
    );
  }
}

export default Login;
