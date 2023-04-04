import Login from "./Components/Login";
import LandingCRM from "./Components/LandingCRM";
import Signup from "./Components/Signup";
import axios from "axios";
import SignupScreen from "./Trading/screen/SignupScreen";
import CreateProfileScreen from "./Trading/screen/CreateProfileScreen";
import ConfirmationSignUp from "./Trading/screen/ConfirmationSignUp";
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/nova-square";
import ProfileInfoScreen from "./Trading/screen/ProfileInfoScreen";

class App extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        const characters = res.data.users_list;
        this.setState({ characters });
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/">
            <Route exact path="" element={<Login />}></Route>
            <Route exact path="landing-page" element={<LandingCRM />}></Route>
            <Route exact path="signup" element={<Signup />}></Route>
          </Route>
          <Route path="/trading-signup" element={<SignupScreen />}></Route>
          <Route path="/confirm-signup" element={<ConfirmationSignUp />} />
          <Route path="/create-profile" element={<CreateProfileScreen />} />
          <Route path="/profile" element={<ProfileInfoScreen />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
