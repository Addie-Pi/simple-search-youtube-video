const VideoDetail = ({ videoDetail }) => {
  if (!videoDetail) {
    return <div>Loading...</div>
  }
  console.log('videoDetail=> ', videoDetail)

  const videoSrc = `https://www.youtube.com/embed/${videoDetail.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe title="videoPlayer" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{videoDetail.snippet.title}</h4>
        <p>{videoDetail.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
