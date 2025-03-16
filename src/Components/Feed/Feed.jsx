import { useEffect, useState } from "react";
import { Link } from "react-router";
import { API_KEY } from "../../data";
import "./Feed.css";

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
        data.map((yVideos) => (
          <Link to={`video/${yVideos.snippet.categoryId}/${yVideos.id}`} key={yVideos.id} className="card">
            <img src={yVideos.snippet.thumbnails.high.url} alt="" />
            <h2>
            {yVideos.snippet.title}
            </h2>
            <h3>{yVideos.snippet.channelTitle}</h3>
            <p>15k views &bull; 2 days ago</p>
          </Link>
        ))
      )}
    </div>
  );
};

export default Feed;
