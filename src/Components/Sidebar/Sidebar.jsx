import React from "react";
import AutoMobilesIcon from "../../assets/automobiles.png";
import BlogsIcon from "../../assets/blogs.png";
import Cameron from "../../assets/cameron.png";
import EntertainmentIcon from "../../assets/entertainment.png";
import GameIcon from "../../assets/game_icon.png";
import HomeIcon from "../../assets/home.png";
import Jack from "../../assets/jack.png";
import Megan from "../../assets/megan.png";
import MusicIcon from "../../assets/music.png";
import NewsIcon from "../../assets/news.png";
import Simon from "../../assets/simon.png";
import SportsIcon from "../../assets/sports.png";
import TechIcon from "../../assets/tech.png";
import Tom from "../../assets/tom.png";
import "./Sidebar.css";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category === 0 ? "active" : ''}`} onClick={() => setCategory(0)}>
          <img src={HomeIcon} alt="" />
          <p>Home</p>
        </div>

        <div className={`side-link ${category === 20 ? "active" : ''}`} onClick={() => setCategory(20)}>
          <img src={GameIcon} alt="" />
          <p>Game</p>
        </div>

        <div className={`side-link ${category === 40 ? "active" : ''}`} onClick={() => setCategory(23)}>
          <img src={AutoMobilesIcon} alt="" />
          <p>Comedy</p>
        </div>

        <div className={`side-link ${category === 17 ? "active" : ''} `} onClick={() => setCategory(17)}>
          <img src={SportsIcon} alt="" />
          <p>Sports</p>
        </div>

        <div className={`side-link ${category === 24 ? "active" : ''}`} onClick={() => setCategory(24)}>
          <img src={EntertainmentIcon} alt="" />
          <p>Entertainment</p>
        </div>

        <div className={`side-link ${category === 41 ? "active" : ''}`} onClick={() => setCategory(28)}>
          <img src={TechIcon} alt="" />
          <p>Science </p>
        </div>

        <div className={`side-link ${category === 10 ? "active" : ''}`} onClick={() => setCategory(10)}>
          <img src={MusicIcon} alt="" />
          <p>Music</p>
        </div>

        <div className={`side-link ${category === 22 ? "active" : ''}`} onClick={() => setCategory(22)}>
          <img src={BlogsIcon} alt="" />
          <p>Blogs</p>
        </div>

        <div className={`side-link ${category === 25 ? "active" : ''}`} onClick={() => setCategory(25)}>
          <img src={NewsIcon} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className={`side-link`}>
          <img src={Jack} alt="" />
          <p>Udoy</p>
        </div>
        <div className={`side-link`}>
          <img src={Simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className={`side-link`}>
          <img src={Tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className={`side-link`}>
          <img src={Megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className={`side-link`}>
          <img src={Cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
