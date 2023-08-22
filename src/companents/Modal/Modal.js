import React from 'react';
import Portal from "../Portal/Portal";
import "./Modal.scss";

const Modal = (props) => {
  const {text, closeHandler, action} = props;
  return (
    <Portal>
      <div className={"modal-wrapper"} onClick={closeHandler}></div>
      <div className={"modal"}>
        <span className={"modal-btn-close"} onClick={closeHandler}>&#10006;</span>
        {text}
        <div className={"modal-btn-wrapper"}>
          {action}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;