import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { API_KEY, valueConverter } from "../../data";
import "./Feed.css";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  // const [total, setToal] = useState(200);
  // const [isMore, setIsMore] = useState(true);

  const loadingRef = useRef(null);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
      );
      if (res.status === 200) {
        const responseData = await res.json();
        // if (responseData.items.length === 0) {
          // setIsMore(false);
        // } else {
          // console.log("hello",responseData)
          setData(responseData.items);
        // }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // const showMoreDataFunction = (value) => {
  //   const isInterSecting = value[0].isIntersecting;
  //   if (isInterSecting) {
  //     console.log("hello");
  //     setToal((prev)=> prev + 10);
  //   }
  // };
  useEffect(() => {
    fetchData();
  }, [category]);

  // useEffect(() => {
  //   const overser = new IntersectionObserver(showMoreDataFunction);
  //   if (overser && isMore) {
  //     overser.observe(loadingRef.current);
  //   }
  //   return () => {
  //     overser.disconnect(loadingRef.current);
  //   };
  // }, []);
  return (
    <>
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
                {valueConverter(yVideo.statistics.viewCount)} Views &bull;{" "}
                {moment(yVideo.snippet.publishedAt).fromNow()}
              </p>
            </Link>
          ))
        )}
      </div>
      {/* {isMore && (
        <div
          ref={loadingRef}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          Loading.....
        </div>
      )} */}
    </>
  );
};

export default Feed;
