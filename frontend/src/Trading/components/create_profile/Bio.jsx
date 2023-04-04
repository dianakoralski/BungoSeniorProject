import React from "react";
import "./style/Bio.css";
import { Textarea, Tooltip } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

function Bio(props) {
  const handleChange = (event) => {
    props.setBio(event.target.value);
  };

  return (
    <div>
      <h1 className="BioHeader">
        Great to have you here. Tell us the kind of work you do.
        <Tooltip
          label="Share your skills, years of experience, and everything that makes you an exceptional creative!"
          fontSize="sm"
        >
          <InfoIcon className="BioInfo" />
        </Tooltip>
      </h1>
      <hr className="BioBar"></hr>
      <Textarea
        className="BioText"
        value={props.bio}
        onChange={handleChange}
        resize="none"
      ></Textarea>
    </div>
  );
}

export default Bio;
