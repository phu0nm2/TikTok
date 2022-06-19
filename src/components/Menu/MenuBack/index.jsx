import React from "react";

import { ArrowLeftOutlined } from "@ant-design/icons";

import "./styles.scss";

const MenuBack = ({ title, onBack }) => {
  return (
    <header className="menu__back">
      <button className="menu__back-icon" onClick={onBack}>
        <ArrowLeftOutlined />
      </button>

      <h4 className="menu__back-title">{title}</h4>
    </header>
  );
};

export default MenuBack;
