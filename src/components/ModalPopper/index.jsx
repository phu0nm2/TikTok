import React from "react";
import "./styles.scss";

const ModalPopper = ({ children, className }) => {
  return <div className={`popper ${className}`}>{children}</div>;
};

export default ModalPopper;
