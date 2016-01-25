import axios from 'axios';

const API_KEY = 'AIzaSyD7-dlBbCYfIGXprw824JkjIMVjKNroL8g';
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&maxResults=50`

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function fetchVideos(term) {
  const url = `${YOUTUBE_URL}&q=${term}`;
  const request = axios.get(url);

  console.log('Url :', url);
  return {
    type: FETCH_VIDEOS,
    payload: request
  }
}

export function selectVideo(video) {
  return {
    type: SELECT_VIDEO,
    payload: video
  };
}
