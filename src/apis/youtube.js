import axios from 'axios'

const KEY = 'AIzaSyA8wsA3IaTqGZ2WiyhTmVy8anr7yvffmTM'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    type: 'video',
    key: KEY,
  },
})
