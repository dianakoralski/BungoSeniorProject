import React, { useState } from "react";
import { Stack } from "@mui/material";
import ProgressBar from "../components/ProgressBar";
import ProgressButton from "../components/ProgressButton";
import "./style/Signup_CreateProfile.css";
import { createProfileSteps } from "../components/stepList";
import ProfilePhoto from "../components/create_profile/ProfilePhoto";
import Bio from "../components/create_profile/Bio";
import Services from "../components/create_profile/Services";
import Interests from "../components/create_profile/Interests";
import { useNavigate } from "react-router-dom";
import Socials from "../components/create_profile//Socials";

function CreateProfileScreen() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [bio, setBio] = useState("");
  const [availableServices, SetAvailableServices] = useState([
    { name: "Graphic Design", selected: false, custom: false },
    { name: "Illustration", selected: false, custom: false },
    { name: "Web Application", selected: false, custom: false },
    { name: "Video Editing", selected: false, custom: false },
    { name: "UI Desgin", selected: false, custom: false },
    { name: "Modeling", selected: false, custom: false },
    { name: "Videographer", selected: false, custom: false },
    { name: "Web Developer", selected: false, custom: false },
  ]);
  const [services, setServices] = useState([]);
  const [availableInterests, SetAvailableInterests] = useState([
    { name: "Coffee", selected: false, custom: false },
    { name: "Rollerblading", selected: false, custom: false },
    { name: "Singing", selected: false, custom: false },
    { name: "Dancing", selected: false, custom: false },
    { name: "Surfing", selected: false, custom: false },
    { name: "Water sports", selected: false, custom: false },
  ]);
  const [interests, setInterests] = useState([]);
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const handleFinish = (e) => {
    navigate("/profile");
  };

  return (
    <Stack gap={1}>
      {/* Headers */}
      <div className="noatanga-label">NOATANGA</div>
      <div className="signup-label">Create Your Profile</div>

      {/* Steps progress bar */}
      <ProgressBar
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        steps={createProfileSteps}
      />

      <div className="createprofile-form-container">
        {activeIndex === 0 && (
          <ProfilePhoto
            profilePhoto={profilePhoto}
            setProfilePhoto={setProfilePhoto}
          />
        )}
        {activeIndex === 1 && <Bio bio={bio} setBio={setBio} />}
        {activeIndex === 2 && (
          <Services
            available={availableServices}
            setAvailable={SetAvailableServices}
            servicesProvided={services}
            setServices={setServices}
          />
        )}
        {activeIndex === 3 && (
          <Interests
            available={availableInterests}
            setAvailable={SetAvailableInterests}
            interestsProvided={interests}
            setInterests={setInterests}
          />
        )}
        {activeIndex === 5 && (
          <Socials
            twitter={twitter}
            setTwitter={setTwitter}
            instagram={instagram}
            setInstagram={setInstagram}
            facebook={facebook}
            setFacebook={setFacebook}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
          />
        )}
        {/* {activeIndex === 1 && <Email/>}
            {activeIndex === 2 && <Password/>}
            {activeIndex === 3 && <PhoneNumber/>} */}
      </div>

      {/* Button for going to the next step */}
      <ProgressButton
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        steps={createProfileSteps}
        onsubmit={handleFinish}
        name={"Finish"}
      />

      {(activeIndex === 3 || activeIndex === 5) && (
        <button
          //The onClick will be a prop that should be passed in
          onClick={() => setActiveIndex(activeIndex + 1)}
          className="progress-button-skip"
        >
          skip
        </button>
      )}

      {activeIndex === 6 && (
        <button
          //The onClick will be a prop that should be passed in
          onClick={() => navigate("/profile")}
          className="progress-button-skip"
        >
          skip
        </button>
      )}
    </Stack>
  );
}

export default CreateProfileScreen;
