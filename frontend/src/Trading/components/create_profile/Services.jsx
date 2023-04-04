import React, { useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import { AddIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import "./style/Services.css";

function Services(props) {
  const [showInput, setShowInput] = useState(false);
  const [customService, setCustomService] = useState("");

  const handleClick = (event) => {
    const serviceName = event.target.id;
    const wasSelected = props.available.find(
      (service) => service.name === serviceName
    ).selected;
    let updatedAvailable = [...props.available];
    updatedAvailable.find((service) => service.name === serviceName).selected =
      !wasSelected;
    props.setAvailable(updatedAvailable);
    let updatedProvided = [...props.servicesProvided];
    if (!wasSelected) {
      updatedProvided.push(serviceName);
      props.setServices(updatedProvided);
    } else {
      for (var i = 0; i < updatedProvided.length; i++) {
        if (updatedProvided[i] === serviceName) {
          updatedProvided.splice(i, 1);
        }
      }
      props.setServices(updatedProvided);
    }
  };

  const handleAdd = () => {
    setShowInput(!showInput);
  };

  const handleChange = (event) => {
    setCustomService(event.target.value);
  };

  const handleSubmit = (event) => {
    setShowInput(!showInput);
    if (customService === "") {
      event.preventDefault();
      return;
    }
    const duplicate = props.available.findIndex((value) => {
      return value.name === customService;
    });
    if (duplicate > -1) {
      let updatedAvailable = [...props.available];
      updatedAvailable[duplicate].selected = true;
      props.setAvailable(updatedAvailable);
    } else {
      let updatedAvailable = [...props.available];
      updatedAvailable.push({
        name: customService,
        selected: true,
        custom: true,
      });
      props.setAvailable(updatedAvailable);
      let updatedProvided = [...props.servicesProvided];
      updatedProvided.push(customService);
      props.setServices(updatedProvided);
    }
    setCustomService("");
    event.preventDefault();
  };

  const handleDelete = (event) => {
    const serviceName = event.currentTarget.id;
    const index = props.available.findIndex((value) => {
      return value.name === serviceName;
    });
    if (props.available[index].selected) {
      let updatedProvided = [...props.servicesProvided];
      for (var i = 0; i < updatedProvided.length; i++) {
        if (updatedProvided[i] === serviceName) {
          updatedProvided.splice(i, 1);
        }
      }
      props.setServices(updatedProvided);
    }
    let updatedAvailable = [...props.available];
    updatedAvailable.splice(index, 1);
    props.setAvailable(updatedAvailable);
  };

  const ListServices = props.available.map((service) => (
    <li key={service.name}>
      <div className="Tags">
        <button
          id={service.name}
          onClick={handleClick}
          className={
            service.selected
              ? "ServiceButton Selected"
              : "ServiceButton Unselected"
          }
        >
          {service.name}
        </button>
        {service.custom && (
          <button
            id={service.name}
            onClick={handleDelete}
            className="DeleteCustomService"
          >
            <Tooltip label="Delete this custom service" fontSize="sm">
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
        <Tooltip
          label="Add a custom service that you want to provide"
          fontSize="sm"
        >
          <AddIcon className="AddIcon" />
        </Tooltip>
      </button>
    </li>
  );

  const customInput = (
    <li>
      <form className="AddServiceForm">
        <label>
          Enter custom service:
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
      <h1 className="ServicesHeader">
        Select three services you'd like to offer
      </h1>
      <hr className="ServicesBar"></hr>
      <div className="ServicesContainer">
        <ul>
          {ListServices}
          {!showInput && addCustomButton}
          {showInput && customInput}
        </ul>
      </div>
    </div>
  );
}

export default Services;
