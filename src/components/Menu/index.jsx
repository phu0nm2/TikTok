import React from "react";
import "./styles.scss";

import Tippy from "@tippyjs/react/headless";

import ModalPopper from "../ModalPopper";
import MenuItem from "./MenuItem";
import MenuBack from "./MenuBack";

const defaultFn = () => {};

const Menu = ({
  children,
  data,
  onChange = defaultFn,
  hideOnClick = false,
}) => {
  const [history, setHistory] = React.useState([{ data: data }]);

  const curr = history[history.length - 1];

  const renderItem = () => {
    return curr.data.map((item, index) => {
      const isParent = item.children;
      return (
        <MenuItem
          className="menu__item"
          key={index}
          MenuItem={item}
          onClick={() => {
            if (!!isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        ></MenuItem>
      );
    });
  };

  return (
    <Tippy
      // visible
      delay={[0, 800]}
      offset={[12, 6]}
      hideOnClick={hideOnClick}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className="menu" tabIndex="-1" {...attrs}>
          <ModalPopper className="menu__content">
            {/* back to choose language */}

            {history.length > 1 ? (
              <MenuBack
                title="Language"
                history={history.data}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              ></MenuBack>
            ) : (
              ""
            )}

            <div className="menu__scrollable">{renderItem()}</div>
          </ModalPopper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
