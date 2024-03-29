import React from "react";

import { LoadingOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { CloseIcon, SearchIcon } from "../Icons";

import HeadlessTippy from "@tippyjs/react/headless";
import ModalPopper from "../ModalPopper";
import AccountItem from "../AccountItem";

import useDebounce from "../hooks/useDebounce";

import { apiUsers } from "../../api/apiTikTok";

import "./styles.scss";
import { fetchSearch } from "../../store/reducers/users";

const Search = () => {
  const [searchUsers, setSearchUsers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [showHideUsers, setShowHideUsers] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const debouce = useDebounce(searchValue, 700);
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (!debouce.trim()) {
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const res = await fetchSearch(debouce);

      setSearchUsers(res);
      setLoading(false);
    };

    fetchApi();
  }, [debouce]);

  const handleClear = (e) => {
    setSearchValue("");
    setSearchUsers([]);
    inputRef.current.focus();
  };

  const handleShowHide = () => {
    setShowHideUsers(false);
  };

  const handleChange = (e) => {
    const searchInput = e.target.value;

    if (searchInput.startsWith(" ")) {
      return;
    }

    setSearchValue(searchInput);
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
            onChange={handleChange}
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

          <button
            className="search__from-btn"
            type="button"
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon></SearchIcon>
          </button>
        </form>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
