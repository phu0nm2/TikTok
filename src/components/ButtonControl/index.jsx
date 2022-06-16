import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const ButtonControl = ({
  leftIcon,
  rightIcon,
  children,
  to,
  href,
  onClick,
  ...passProps
}) => {
  let Comp = "button";
  const props = {
    onClick,

    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp className="btn__control" {...props}>
      {leftIcon ? <span>{leftIcon}</span> : ""}
      <span>{children}</span>
      {rightIcon ? <span>{rightIcon}</span> : ""}
    </Comp>
  );
};

export default ButtonControl;
