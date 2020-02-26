import axios from 'axios';

const KEY = 'AIzaSyDBsbVC_U-YkGkL7qH44FzDIAChJa4d6hg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: '5',
    key: KEY
  }
});
