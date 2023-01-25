import videos from "./videos";
import categories from "./categories";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ videos, categories });

export default rootReducer;
