import React from "react";

import { LoadingOutlined, CloseCircleOutlined } from "@ant-design/icons";

import HeadlessTippy from "@tippyjs/react/headless";
import ModalPopper from "../ModalPopper";
import AccountItem from "../AccountItem";
import { CloseIcon, SearchIcon } from "../Icons";

import "./styles.scss";

const Search = () => {
  const [searchUsers, setSearchUsers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [showHideUsers, setShowHideUsers] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const inputRef = React.useRef();

  React.useEffect(() => {
    if (!searchValue.trim()) {
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [searchValue]);

  const handleClear = (e) => {
    setSearchValue("");
    setSearchUsers([]);
    inputRef.current.focus();
  };

  const handleShowHide = () => {
    setShowHideUsers(false);
  };

  return (
    <HeadlessTippy
      // className="search"
      onClickOutside={handleShowHide}
      interactive
      visible={showHideUsers && searchUsers.length > 0}
      render={(attrs) => (
        <div className="search__account" tabIndex="-1" {...attrs}>
          <ModalPopper>
            <h5 className="search__account-title">Accounts</h5>
            {searchUsers.map((user) => (
              <AccountItem data={user} key={user.id}></AccountItem>
            ))}
          </ModalPopper>
        </div>
      )}
    >
      <div className="search__search">
        <form className="search__from" action="#">
          <input
            ref={inputRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowHideUsers(true)}
            className="search__from-input"
            placeholder="Tìm kiếm tài khoản và videos"
            type="text"
          />

          {!!searchValue && !loading && (
            <button className="search__from-close" onClick={handleClear}>
              {/* <CloseIcon></CloseIcon> */}
              <CloseCircleOutlined />
            </button>
          )}

          {loading && (
            <div className="search__from-loading">
              <LoadingOutlined />
            </div>
          )}

          <button className="search__from-btn" type="button">
            <SearchIcon></SearchIcon>
          </button>
        </form>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
