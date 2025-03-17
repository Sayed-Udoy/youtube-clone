import { useEffect, useState } from "react";
import { Link } from "react-router";
import { API_KEY, valueConverter } from "../../data";
import "./Recomended.css";

const Recomended = ({ categoryId }) => {
  const [reletedData, setReletedData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=${categoryId}&maxResults=50&key=${API_KEY}`
      );
      const data = await res.json();
      setReletedData(data.items);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(reletedData);
  return (
    <div className="recomended">
      {reletedData &&
        reletedData.map((data) => (
          <Link
          key={data.id}
            to={`/video/${data.categoryId}/${data.id}`}
            className="side-video-list"
          >
            <img src={data?.snippet?.thumbnails?.high?.url} alt="" />
            <div className="vid-info">
              <h4>{data?.snippet?.title.slice(0, 60)}....</h4>
              <p>{data?.snippet?.channelTitle}</p>
              <p>{valueConverter(data?.statistics?.viewCount)} Views</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Recomended;
