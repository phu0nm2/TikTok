import React from "react";
import "./styles.scss";

import Tippy from "@tippyjs/react/headless";

import ModalPopper from "../ModalPopper";
import MenuItem from "./MenuItem";

const Menu = ({ children, data }) => {
  return (
    <Tippy
      delay={[0, 800]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className="menu" tabIndex="-1" {...attrs}>
          <ModalPopper className="menu__content">
            {data.map((item, index) => (
              <MenuItem
                className="menu__item"
                key={index}
                item={item}
              ></MenuItem>
            ))}
          </ModalPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
