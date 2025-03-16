import { useEffect, useState } from "react";
import { Link } from "react-router";
import { API_KEY, valueConverter } from "../../data";
import "./Feed.css";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        );
        if (res.status === 200) {
          const responseData = await res.json();
          setData(responseData.items);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [category]);
  console.log(data);
  return (
    <div className="feed">
      {data.length <= 0 ? (
        <div>No Videos Available</div>
      ) : (
        data.map((yVideo) => (
          <Link
            to={`video/${yVideo.snippet.categoryId}/${yVideo.id}`}
            key={yVideo.id}
            className="card"
          >
            <img src={yVideo.snippet.thumbnails.high.url} alt="" />
            <h2>{yVideo.snippet.title}</h2>
            <h3>{yVideo.snippet.channelTitle}</h3>
            <p>
              {valueConverter(yVideo.statistics.viewCount)} Views &bull; {moment(yVideo.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        ))
      )}
    </div>
  );
};

export default Feed;
