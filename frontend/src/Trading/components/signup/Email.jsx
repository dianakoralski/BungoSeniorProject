import React from "react";
import "./style/Email.css";
import "./style/Field.css";

function Email(props) {
  const handleChange = (event) => {
    props.setEmail(event.target.value);
  };

  return (
    <div className="Field Email">
      <span>Email address</span>
      <input
        placeholder="hello@gmail.com"
        value={props.email}
        onChange={handleChange}
      ></input>
      <hr></hr>
    </div>
  );
}

export default Email;
