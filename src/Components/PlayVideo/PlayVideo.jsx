import moment from "moment";
import React, { useEffect, useState } from "react";
import DislikeIcon from "../../assets/dislike.png";
import { default as UserProfile } from "../../assets/jack.png";
import LikeIcon from "../../assets/like.png";
import SaveIcon from "../../assets/save.png";
import ShareIcon from "../../assets/share.png";
import { API_KEY, valueConverter } from "../../data";
import "./PlayVideo.css";

const PlayVideo = ({ videoId}) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchVideoDetails = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      if (res.status === 200) {
        const data = await res.json();
        setApiData(data.items[0]);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchOtherData = async () => {
    // Fetching Channel Data
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`
    );
    if (res.status === 200) {
      const data = await res.json();
      setChannelData(data.items[0]);
    }
  };
  const fetchCommentData = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    );
    if (res.status === 200) {
      const data = await res.json();
      setCommentData(data.items);
    }
  };
  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
    fetchCommentData();
  }, [apiData,videoId]);


  if (isLoading) {
    return <div>Loading....</div>;
  }
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
          <span>
            {valueConverter(channelData?.statistics?.subscriberCount)}{" "}
            Subscriber
          </span>
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
        {commentData <= 0 ? (
          <div>No Comment here</div>
        ) : (
          commentData.map((comment) => (
            <div key={comment.id} className="comment">
              <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl??UserProfile} alt="" />
              <div>
                <h3>
                  {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                  <span>{moment(comment?.snippet?.topLevelComment?.snippet?.updatedAt).fromNow()}</span>
                </h3>
                <p>
                {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
                </p>
                {/* comment action  */}
                <div className="comment-action">
                  <img src={LikeIcon} alt="" />
                  <span>{valueConverter(comment?.snippet?.topLevelComment?.snippet?.likeCount)}</span>
                  <img src={DislikeIcon} alt="" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PlayVideo;
