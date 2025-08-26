import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  TikTokLogoIcon,
  HomeIcon,
  ExploreIcon,
  FollowingIcon,
  UploadIcon,
  LiveIcon,
  ProfileIcon,
  TimKiem,
} from "./Cons";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo" onClick={() => navigate("/")}>
        <TikTokLogoIcon width={120} height={50} />
      </div>

    <div className="search-bar">
      <input type="text" placeholder="Tìm kiếm" />
      <span className="search-icon">
        <TimKiem width={18} height={18} />
      </span>
    </div>

      <nav>
        <NavLink to="/" className="menu-item">
          <HomeIcon /> <span>Đề xuất</span>
        </NavLink>
        <NavLink to="/explore" className="menu-item">
          <ExploreIcon width={120} height={50}/> <span>Khám phá</span>
        </NavLink>
        <NavLink to="/following" className="menu-item">
          <FollowingIcon /> <span>Đang follow</span>
        </NavLink>
        <NavLink to="/upload" className="menu-item">
          <UploadIcon /> <span>Tải lên</span>
        </NavLink>
        <NavLink to="/live" className="menu-item">
          <LiveIcon /> <span>Live</span>
        </NavLink>
        <NavLink to="/profile" className="menu-item">
          <ProfileIcon /> <span>Cá nhân</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
