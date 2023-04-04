// import React, { useState } from 'react';
import "./Progress.css";

//List for number of steps
//Can be defined elsewhere for reusability of the progress bar

// import steps from "./stepList.js"

const ProgressBar = (props) => {
  return (
    <div className="container">
      <ul className="progress-indicator">
        {/* Map through each step */}
        {props.steps.map((step) => (
          <li
            key={step.index}
            //Determine if the step is complete, active or inactive to change the style
            //style for each state is defined in the ProgressBar.css file
            className={`
            progress-step
            ${props.activeIndex === step.index ? "active" : "inactive"}
            ${props.activeIndex > step.index ? "complete" : "incomplete"}
          `}
          >
            <button
              className="step-number"
              onClick={() => props.setActiveIndex(step.index)}
            >
              {step.index + 1}
            </button>
            <h3>{step.label}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;
