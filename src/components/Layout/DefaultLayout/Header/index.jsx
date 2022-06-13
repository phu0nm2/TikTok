import React from "react";
import { images } from "../../../../assets/images";

import { LoadingOutlined, CloseCircleOutlined } from "@ant-design/icons";

import "./styles.scss";

function Header() {
  // const Search = Input;

  // const onSearch = (value) => console.log(value);

  return (
    <header className="header">
      <div className="header-content container">
        <div className="header-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <div className="header__search">
          <form className="header__from" action="#">
            <input
              className="header__from-input"
              placeholder="Search accounts and videos"
              type="text"
            />
            <div className="header__from-close">
              {/* <img src={images.close} alt="Close" /> */}
              <CloseCircleOutlined />
            </div>

            <div className="header__from-loading">
              <LoadingOutlined />
            </div>

            <button
              className="header__from-btn"
              type="button"
              // onClick={handleSearchOpen}
            >
              <img src={images.search} alt="search" />
            </button>
          </form>
        </div>
        <div className="header-actions">action</div>
      </div>
    </header>
  );
}

export default Header;
