// import React, {useState } from "react";
import "./style/Name.css";
import "./style/Field.css";

function Name(props) {
  const handleFirstNameChange = (event) => {
    props.setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    props.setLastName(event.target.value);
  };

  return (
    <div className="Field Name">
      <span>First name</span>
      <input
        placeholder="Jane"
        value={props.firstName}
        onChange={handleFirstNameChange}
      ></input>
      <hr></hr>
      <span className="LastName">Last name</span>
      <input
        className="LastName"
        placeholder="Doe"
        value={props.lastName}
        onChange={handleLastNameChange}
      ></input>
      <hr className="LastName"></hr>
    </div>
  );
}

export default Name;
