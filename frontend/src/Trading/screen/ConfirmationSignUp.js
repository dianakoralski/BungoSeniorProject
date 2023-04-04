import React from "react";
import { Stack } from "@mui/material";
import "./style/Signup_CreateProfile.css";
import "../components/Progress.css";
import { useNavigate } from "react-router-dom";

const ConfirmationSignUp = () => {
  const navigate = useNavigate();
  return (
    <Stack gap={2}>
      {/* Headers */}
      <div className="noatanga-label">NOATANGA</div>
      <div className="signup-label">Create Your Profile</div>
      <div className="profile-prompt">
        Would you like to create your profile now to start trading your
        services?
      </div>
      <div className="button-options">
        <button
          onClick={() => {
            navigate("/create-profile");
          }}
          className="continue-button"
        >
          Yes
        </button>
        <button className="subtle-button">Create later</button>
      </div>
    </Stack>
  );
};

export default ConfirmationSignUp;
