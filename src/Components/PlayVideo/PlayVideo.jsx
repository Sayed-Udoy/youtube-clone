import React from "react";
import DislikeIcon from "../../assets/dislike.png";
import { default as Jack, default as UserProfile } from "../../assets/jack.png";
import LikeIcon from "../../assets/like.png";
import SaveIcon from "../../assets/save.png";
import ShareIcon from "../../assets/share.png";
import Video1 from "../../assets/video.mp4";
import "./PlayVideo.css";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={Video1} controls muted autoPlay></video>
      <h3>Best youtube channel To learn web development</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={LikeIcon} alt="" />
            125
          </span>
          <span>
            <img src={DislikeIcon} alt="" />
            125
          </span>
          <span>
            <img src={ShareIcon} alt="" />
            Share
          </span>
          <span>
            <img src={SaveIcon} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      {/* Publisher  */}
      <div className="publisher">
        <img src={Jack} alt="" />
        <div>
          <p>Greatstack</p>
          {/* subscriber details  */}
          <span>1M Subscriber</span>
        </div>
        <button>Subscribe</button>
      </div>
      {/* Descrebsiton  */}
      <div>
        <p>Channel thats makes learning easy</p>
        <p>Subscribe GreatStack to watch more tutorial on web development</p>
        <hr />
        {/* comments  */}
        <h4>130 Comments</h4>
        {/* all comments have been renderd here */}
        <div className="comment">
          <img src={UserProfile} alt="" />
          <div>
            <h3>
              Jack Nicolson
              <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a varitey of infromation and
              of interconnected networks using standarrds communication
            </p>
            {/* comment action  */}
            <div className="comment-action">
              <img src={LikeIcon} alt="" />
              <span>244</span>
              <img src={DislikeIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={UserProfile} alt="" />
          <div>
            <h3>
              Jack Nicolson
              <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a varitey of infromation and
              of interconnected networks using standarrds communication
            </p>
            {/* comment action  */}
            <div className="comment-action">
              <img src={LikeIcon} alt="" />
              <span>244</span>
              <img src={DislikeIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={UserProfile} alt="" />
          <div>
            <h3>
              Jack Nicolson
              <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a varitey of infromation and
              of interconnected networks using standarrds communication
            </p>
            {/* comment action  */}
            <div className="comment-action">
              <img src={LikeIcon} alt="" />
              <span>244</span>
              <img src={DislikeIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={UserProfile} alt="" />
          <div>
            <h3>
              Jack Nicolson
              <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a varitey of infromation and
              of interconnected networks using standarrds communication
            </p>
            {/* comment action  */}
            <div className="comment-action">
              <img src={LikeIcon} alt="" />
              <span>244</span>
              <img src={DislikeIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
