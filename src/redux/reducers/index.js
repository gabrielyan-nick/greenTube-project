import videos from "./videos";
import channelDetail from "./channelDetail";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ videos, channelDetail });

export default rootReducer;
