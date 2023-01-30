import axios from "axios";
import { BASE_URL, options } from "./videos";

export const fetchVideoDetail = (id) => (dispatch) => {
  axios
    .get(`${BASE_URL}/video?id=${id}`, options)
    .then((res) => {
      dispatch(setVideoDetail(res.data));
    })
    .catch((e) => console.log(e));
  axios
    .get(`${BASE_URL}/related?id=${id}`, options)
    .then((res) => {
      dispatch(setRelatedVideos(res.data.data));
    })
    .catch((e) => console.log(e));
};

export const setVideoDetail = (payload) => {
  return {
    type: "SET_VIDEO_DETAIL",
    payload,
  };
};

export const setRelatedVideos = (payload) => {
  return {
    type: "SET_RELATED_VIDEOS",
    payload,
  };
};
