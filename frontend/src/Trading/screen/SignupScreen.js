import React, { useState } from "react";
import { Stack } from "@mui/material";
import ProgressBar from "../components/ProgressBar";
import ProgressButton from "../components/ProgressButton";
import "./style/Signup_CreateProfile.css";
import Name from "../components/signup/Name";
import Email from "../components/signup/Email";
import Password from "../components/signup/Password";
import PhoneNumber from "../components/signup/PhoneNumber";
import { signupSteps } from "../components/stepList";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/confirm-signup");
  };
  return (
    <Stack gap={2}>
      {/* Headers */}
      <div className="noatanga-label">NOATANGA</div>
      <div className="signup-label">Sign Up</div>

      {/* Steps progress bar */}
      <ProgressBar
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        steps={signupSteps}
      />

      <div className="signup-form-container">
        {activeIndex === 0 && (
          <Name
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
          />
        )}
        {activeIndex === 1 && <Email email={email} setEmail={setEmail} />}
        {activeIndex === 2 && (
          <Password password={password} setPassword={setPassword} />
        )}
        {activeIndex === 3 && (
          <PhoneNumber
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        )}
      </div>

      {/* Button for going to the next step */}
      <ProgressButton
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        steps={signupSteps}
        onsubmit={handleSubmit}
        name={"Submit"}
      />
    </Stack>
  );
}

export default SignupScreen;
