import React from "react";
import { Link } from "react-router-dom";

import {
  TranslationOutlined,
  DesktopOutlined,
  QuestionCircleOutlined,
  MailOutlined,
  MessageOutlined,
  UserOutlined,
  DollarCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Menu from "../Menu";
import ButtonControl from "../ButtonControl";
import { LogoIcon, UploadIcon } from "../Icons";

import "./styles.scss";
import Image from "../Image";
import Search from "../Search";

function Header() {
  const isLogin = true;

  const MENU_ITEMS = [
    {
      icon: <TranslationOutlined />,
      lang: "Tiếng Việt",
      children: {
        title: "Ngôn ngữ",
        data: [
          {
            code: "en",
            lang: "English",
          },
          {
            code: "vi",
            lang: "Tiếng Việt",
          },
        ],
      },
    },
    {
      icon: <QuestionCircleOutlined />,
      title: "Phảnh hồi và trợ giúp",
      to: "/feedback",
    },
    {
      icon: <DesktopOutlined />,
      title: "Phìm tắt trên bàn phím",
    },
  ];

  const menuProfile = [
    {
      icon: <UserOutlined />,
      title: "Xem hồ sơ",
      to: "/profile",
    },
    {
      icon: <DollarCircleOutlined />,
      title: "Nhận xu",
      to: "/",
    },
    {
      icon: <SettingOutlined />,
      title: "Cài đặt",
      to: "/setting",
    },

    ...MENU_ITEMS,

    {
      icon: <LogoutOutlined />,
      title: "Đăng xuất",
      to: "/logout",
      separate: "separate",
    },
  ];

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className="header">
      <div className="header-content container">
        <Link to="/" className="header-logo">
          <LogoIcon></LogoIcon>
        </Link>

        <Search></Search>

        {/* actions */}
        <div className="header__actions">
          <ButtonControl
            className="btn__control header__actions-upload"
            leftIcon={<UploadIcon className="upload-icon"></UploadIcon>}
            to="/Upload"
          >
            Tải lên
          </ButtonControl>

          {isLogin ? (
            <>
              <Tippy delay={[0, 200]} content="Message">
                <button className="header__actions-message">
                  <MessageOutlined />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Email">
                <button className="header__actions-email">
                  <MailOutlined />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <ButtonControl
                className="btn__control header__actions-login"
                to="/login"
              >
                Đăng nhập
              </ButtonControl>
            </>
          )}

          <Menu
            data={isLogin ? menuProfile : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {isLogin ? (
              <div>
                <Image
                  className="header__actions-avatar"
                  src="https://randomwordgenerator.com/img/picture-generator/55e6dc464b57af14f1dc8460962e33791c3ad6e04e5074417d2e7ed6964acd_640.jpg"
                  alt="avatar"
                  fallback="https://randomwordgenerator.com/img/picture-generator/55e6dc464b57af14f1dc8460962e33791c3ad6e04e5074417d2e7ed6964acd_640.jpg"
                />
              </div>
            ) : (
              <i>
                <Image
                  src="https://img.icons8.com/ios-glyphs/30/undefined/menu-2.png"
                  alt="menu"
                />
              </i>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
