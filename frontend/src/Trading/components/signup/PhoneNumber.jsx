import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import "./style/PhoneNumber.css";

function PhoneNumber(props) {
  const handleChange = (value, data, event, formattedValue) => {
    props.setPhoneNumber(event.target.value);
  };

  return (
    <div className="PhoneNumber">
      <span className="Header">Phone number (optional)</span>
      <PhoneInput
        className="PhoneInput"
        id="phone"
        country={"us"}
        value={props.phoneNumber}
        onChange={handleChange}
      />
      <hr></hr>
    </div>
  );
}

export default PhoneNumber;
