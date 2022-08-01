import React from "react";
import "../styles/Projects.css";
import GitHubIcon from "@material-ui/icons/GitHub"

function Modal(props) {
    const {description,skills,setShowModal,github} = props;
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3 style={{margin: "0"}}>{description}</h3>
        </div>
        <div className="body">
          <p>Skills used: {skills}</p>
          <div className="social-media-icons">
            <GitHubIcon style={{fontSize:"2rem", color:"black"}} onClick={event=> window.open(github)}/>
          </div>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="cancelBtn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;