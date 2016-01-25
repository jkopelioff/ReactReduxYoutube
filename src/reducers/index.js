import { combineReducers } from 'redux';
import VideoReducer from './reducer_video';
import ActiveVideo from './reducer_active_video';

const rootReducer = combineReducers({
  videos: VideoReducer,
  activeVideo: ActiveVideo
});

export default rootReducer;
