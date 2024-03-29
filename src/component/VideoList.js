import VidoeItem from './VideoItem'
const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video) => {
    return (
      <VidoeItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    )
  })
  return <div className="ui relaxed divided list">{renderList}</div>
}

export default VideoList
