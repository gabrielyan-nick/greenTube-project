import videos from "./videos";
import channelDetail from "./channelDetail";
import videoDetail from "./videoDetail";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ videos, channelDetail, videoDetail });

export default rootReducer;
