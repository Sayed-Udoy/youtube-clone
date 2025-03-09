import React from "react";
import ProfileIcon from "../../assets/jack.png";
import Logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu.png";
import MoreIcon from "../../assets/more.png";
import NotificationIcon from "../../assets/notification.png";
import SearchIcon from "../../assets/search.png";
import UploadIcon from "../../assets/upload.png";
import "./Navbar.css";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          onClick={() => setSidebar((prev) => !prev)}
          className="menu-icon"
          src={MenuIcon}
          width={20}
          height={20}
          alt=""
        />
        <img className="logo" src={Logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={SearchIcon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={UploadIcon} alt="" />
        <img src={MoreIcon} alt="" />
        <img src={NotificationIcon} alt="" />
        <img className="user-icon" src={ProfileIcon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
