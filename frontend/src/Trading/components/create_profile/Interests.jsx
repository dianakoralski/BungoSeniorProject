import React, { useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import { AddIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import "./style/Services.css";

function Interests(props) {
  const [showInput, setShowInput] = useState(false);
  const [customInterest, setCustomInterest] = useState("");

  const handleClick = (event) => {
    const interestName = event.target.id;
    const wasSelected = props.available.find(
      (interest) => interest.name === interestName
    ).selected;
    let updatedAvailable = [...props.available];
    updatedAvailable.find(
      (interest) => interest.name === interestName
    ).selected = !wasSelected;
    props.setAvailable(updatedAvailable);
    let updatedProvided = [...props.interestsProvided];
    if (!wasSelected) {
      updatedProvided.push(interestName);
      props.setInterests(updatedProvided);
    } else {
      for (var i = 0; i < updatedProvided.length; i++) {
        if (updatedProvided[i] === interestName) {
          updatedProvided.splice(i, 1);
        }
      }
      props.setInterests(updatedProvided);
    }
  };

  const handleAdd = () => {
    setShowInput(!showInput);
  };

  const handleChange = (event) => {
    setCustomInterest(event.target.value);
  };

  const handleSubmit = (event) => {
    setShowInput(!showInput);
    if (customInterest === "") {
      event.preventDefault();
      return;
    }
    const duplicate = props.available.findIndex((value) => {
      return value.name === customInterest;
    });
    if (duplicate > -1) {
      let updatedAvailable = [...props.available];
      updatedAvailable[duplicate].selected = true;
      props.setAvailable(updatedAvailable);
    } else {
      let updatedAvailable = [...props.available];
      updatedAvailable.push({
        name: customInterest,
        selected: true,
        custom: true,
      });
      props.setAvailable(updatedAvailable);
      let updatedProvided = [...props.interestsProvided];
      updatedProvided.push(customInterest);
      props.setInterests(updatedProvided);
    }
    setCustomInterest("");
    event.preventDefault();
  };

  const handleDelete = (event) => {
    const interestName = event.currentTarget.id;
    const index = props.available.findIndex((value) => {
      return value.name === interestName;
    });
    if (props.available[index].selected) {
      let updatedProvided = [...props.interestsProvided];
      for (var i = 0; i < updatedProvided.length; i++) {
        if (updatedProvided[i] === interestName) {
          updatedProvided.splice(i, 1);
        }
      }
      props.setInterests(updatedProvided);
    }
    let updatedAvailable = [...props.available];
    updatedAvailable.splice(index, 1);
    props.setAvailable(updatedAvailable);
  };

  const ListInterests = props.available.map((interest) => (
    <li key={interest.name}>
      <div className="Tags">
        <button
          id={interest.name}
          onClick={handleClick}
          className={
            interest.selected
              ? "ServiceButton Selected"
              : "ServiceButton Unselected"
          }
        >
          {interest.name}
        </button>
        {interest.custom && (
          <button
            id={interest.name}
            onClick={handleDelete}
            className="DeleteCustomService"
          >
            <Tooltip label="Delete this custom interest" fontSize="sm">
              <DeleteIcon className="DeleteIcon" />
            </Tooltip>
          </button>
        )}
      </div>
    </li>
  ));

  const addCustomButton = (
    <li>
      <button id="+" className="AddServiceButton" onClick={handleAdd}>
        <Tooltip label="Add a custom interest" fontSize="sm">
          <AddIcon className="AddIcon" />
        </Tooltip>
      </button>
    </li>
  );

  const customInput = (
    <li>
      <form className="AddServiceForm">
        <label>
          Enter custom interest:
          <input
            autoFocus
            className="InputService"
            type="text"
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          <CheckIcon />
        </button>
      </form>
    </li>
  );

  return (
    <div>
      <h1 className="ServicesHeader">Select your interests</h1>
      <hr className="InterestsBar"></hr>
      <div className="ServicesContainer">
        <ul>
          {ListInterests}
          {!showInput && addCustomButton}
          {showInput && customInput}
        </ul>
      </div>
    </div>
  );
}

export default Interests;
