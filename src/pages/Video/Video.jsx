import { useParams } from "react-router"
import PlayVideo from "../../Components/PlayVideo/PlayVideo"
import Recomended from "../../Components/Recomended/Recomended"
import "./Video.css"

const Video = () => {
  const {videoId,categoryId} = useParams()
  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} categoryId={categoryId} />
      <Recomended />
    </div>
  )
}

export default Video