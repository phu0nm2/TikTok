import React from "react";
import ButtonControl from "../../ButtonControl";
import "./styles.scss";

const MenuItem = ({ MenuItem, className, onClick }) => {
  return (
    <ButtonControl
      className={`${className} ${MenuItem.separate}`}
      leftIcon={MenuItem.icon}
      to={MenuItem.to}
      onClick={onClick}
    >
      {MenuItem.lang || MenuItem.title}
    </ButtonControl>
  );
};

export default MenuItem;
