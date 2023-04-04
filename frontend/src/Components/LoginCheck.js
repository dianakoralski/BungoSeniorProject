import "./Login.css";
import axios from "axios";

async function LoginCheck(email, password) {
  if (email === "" && password === "") {
    console.log("No email or password provided.");
    document.getElementById("error").innerHTML =
      "No email or password provided";
  } else if (password === "") {
    console.log("No password provided.");
    document.getElementById("error").innerHTML = "No password provided";
  } else if (email === "") {
    console.log("No email provided.");
    document.getElementById("error").innerHTML = "No email provided";
  } else {
    const user = await axios
      .get(`http://localhost:5000/login/${email}`)
      .then((response) => response);
    if (user.data[0].password === password) {
      console.log("Email: " + email + "\nPassword: " + password);
      window.location.href = "landing-page";
    } else {
      console.log("Password in backend doesn't match");
      document.getElementById("error").innerHTML = "Email or password invalid";
    }
  }
}

export default LoginCheck;
