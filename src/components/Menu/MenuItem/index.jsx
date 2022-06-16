import React from "react";
import ButtonControl from "../../ButtonControl";
import "./styles.scss";

const MenuItem = ({ item, className }) => {
  return (
    <ButtonControl className={`${className}`} leftIcon={item.icon} to={item.to}>
      {item.title}
    </ButtonControl>
  );
};

export default MenuItem;
