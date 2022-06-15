import React from "react";
import { images } from "../../assets/images";

import { LoadingOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Tippy from "@tippyjs/react";

import ModalPopper from "../ModalPopper";
import AccountItem from "../AccountItem";

import "./styles.scss";
import ButtonControl from "../ButtonControl";

function Header() {
  const [searchUser, setSearchUser] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setSearchUser([1, 2, 3]);
    }, 0);
  }, []);

  return (
    <header className="header">
      <div className="header-content container">
        <div className="header-logo">
          <img src={images.logo} alt="logo" />
        </div>
        {/* Tippy Searh */}
        <>
          <Tippy
            visible={searchUser.length > 0}
            interactive
            render={(attrs) => (
              <div className="header__account" tabIndex="-1" {...attrs}>
                <ModalPopper>
                  <h5 className="header__account-title">Accounts</h5>

                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                </ModalPopper>
              </div>
            )}
          >
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

                <button className="header__from-btn" type="button">
                  <img src={images.search} alt="search" />
                </button>
              </form>
            </div>
          </Tippy>
        </>
        <div className="header__actions">
          <ButtonControl
            className="btn__control header__actions-upload"
            leftIcon={
              <img
                className="upload-icon"
                src={images.uploadIcon}
                alt="uploadIcon"
              />
            }
            to="/Upload"
          >
            Tải lên
          </ButtonControl>

          <ButtonControl
            className="btn__control header__actions-login"
            to="/login"
          >
            Đăng nhập
          </ButtonControl>
        </div>
      </div>
    </header>
  );
}

export default Header;
