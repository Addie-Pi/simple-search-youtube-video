import './VideoItem.css'

const VidoeItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        {video.snippet.title}
        <div className="header"></div>
      </div>
    </div>
  )
}

export default VidoeItem
