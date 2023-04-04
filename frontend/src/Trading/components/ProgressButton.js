import "./Progress.css";
// import { FaArrowLeft } from "react-icons/fa";

const ProgressButton = (props) => {
  return (
    <div className="container">
      <div className="actions">
        {/* Show Previous button */}
        {/* {props.activeIndex > 0 && ( */}
        {/* <button */}
        {/* className="progress-button-prev" */}
        {/* // className="progress-button-back" */}
        {/* onClick={() => props.setActiveIndex(props.activeIndex - 1)} */}
        {/* > */}
        {/* <FaArrowLeft/> */}
        {/* Back */}
        {/* </button> */}
        {/* )} */}

        {/* Show next button */}
        {props.activeIndex < props.steps.length - 1 && (
          <button
            onClick={() => props.setActiveIndex(props.activeIndex + 1)}
            className="progress-button next"
          >
            Next
          </button>
        )}

        {/* Insert action for submission */}
        {props.activeIndex === props.steps.length - 1 && (
          <button
            //The onClick will be a prop that should be passed in
            onClick={props.onsubmit}
            className="progress-button next"
          >
            {props.name}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProgressButton;
