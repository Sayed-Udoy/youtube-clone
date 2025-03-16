import moment from "moment";
import React, { useEffect, useState } from "react";
import DislikeIcon from "../../assets/dislike.png";
import { default as Jack, default as UserProfile } from "../../assets/jack.png";
import LikeIcon from "../../assets/like.png";
import SaveIcon from "../../assets/save.png";
import ShareIcon from "../../assets/share.png";
import { API_KEY, valueConverter } from "../../data";
import "./PlayVideo.css";

const PlayVideo = ({ videoId, categoryId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const fetchVideoDetails = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    );
    if (res.status === 200) {
      const data = await res.json();
      setApiData(data.items[0]);
    }
  };
  const fetchOtherData = async () => {
    // Fetching Channel Data
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`
    );
    if (res.status === 200) {
      const data = await res.json();
      setChannelData(data.items[0])
    }
  };
  useEffect(() => {
    fetchVideoDetails();
  }, []);
  
  useEffect(() => {
    fetchOtherData();
  }, [apiData]);
  console.log(channelData)
  return (
    <div className="play-video">
      {/* <video src={Video1} controls muted autoPlay></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      ></iframe>
      <h3>{apiData?.snippet?.title}</h3>
      <div className="play-video-info">
        <p>
          {valueConverter(apiData?.statistics?.viewCount)} &bull;{" "}
          {moment(apiData?.snippet?.publishedAt).fromNow()}
        </p>
        <div>
          <span>
            <img src={LikeIcon} alt="" />
            {valueConverter(apiData?.statistics?.likeCount)}
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
        <img src={channelData?.snippet?.thumbnails?.medium?.url} alt="" />
        <div>
          <p>{apiData?.snippet?.channelTitle}</p>
          {/* subscriber details  */}
          <span>1M Subscriber</span>
        </div>
        <button>Subscribe</button>
      </div>
      {/* Descrebsiton  */}
      <div className="vid-description">
        <p>{apiData?.snippet?.localized?.description.slice(0, 200)}</p>
        <p>{apiData?.snippet?.localized?.title}</p>
        <hr />
        {/* comments  */}
        <h4>{valueConverter(apiData?.statistics?.commentCount)} Comments</h4>
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
