import "./Signup.css";
import axios from "axios";

async function RegisterUser(newUser) {
  await axios.post("http://localhost:5000/users", newUser);
  window.location.href = "landing-page";
}

export default RegisterUser;
