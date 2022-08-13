import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  FollowIcon,
  LiveIcon,
  HomeActiveIcon,
  FollowActiveIcon,
  LiveActiveIcon,
} from "../Icons";
import "./styles.scss";

function Sidebar() {
  // const [selected, setSelected] = React.useState("");

  return (
    <>
      <div className="sidebar">
        <NavLink
          className={({ isActive }) =>
            "sidebar_item " + (isActive ? "active" : "")
          }
          to="/"
        >
          <span className="active-icon">
            <HomeIcon />
          </span>

          <span className="icon">
            <HomeActiveIcon />
          </span>

          <span>Dành cho bạn</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            "sidebar_item " + (isActive ? "active" : "")
          }
          to="/Following"
        >
          <span className="icon">
            <FollowIcon />
          </span>

          <span className="active-icon">
            <FollowActiveIcon />
          </span>

          <span>Đang follow</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            "sidebar_item " + (isActive ? "active" : "")
          }
          to="/Live"
        >
          <span className="icon">
            <LiveIcon />
          </span>
          <span className="active-icon">
            <LiveActiveIcon />
          </span>
          <span>LIVE</span>
        </NavLink>
      </div>
    </>
  );
}

export default Sidebar;
