import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    // set default search term
    this.onTermSubmit('chill music')
  }

  onTermSubmit = async (term) => {
    // console.log('term=>', term)

    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    })

    // console.log('response=>', response)

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  }

  onVideoSelect = (video) => {
    console.log('consoleFromApp=> ', video)

    this.setState({ selectedVideo: video })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail videoDetail={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
