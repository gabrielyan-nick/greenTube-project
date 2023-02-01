import axios from "axios";
import { BASE_URL, options } from "./videos";

export const fetchChannelDetail =
  (id, pageToken = "", bool = false) =>
  (dispatch) => {
    dispatch(setError(false));
    dispatch(setLoaded(bool));
    axios
      .get(`${BASE_URL}/channel?id=${id}&token=${pageToken}`, options) //.get(`${BASE_URL}/channels?part=snippet&id=${id}`, options)
      .then((res) => {
        if (pageToken === "") {
          dispatch(setChannelDetail(res?.data?.meta));
          dispatch(setVideos(res?.data?.data));
          dispatch(setNextPageToken(res?.data?.continuation));
        } else {
          dispatch(setLazzyLoading(res?.data?.data));
          dispatch(setNextPageToken(res?.data?.continuation));
        }
      })
      .catch((e) => {
        dispatch(setError(true));
        console.log(e);
      });
  };

export const setChannelDetail = (payload) => {
  return {
    type: "SET_CHANNEL_DETAIL",
    payload,
  };
};

export const setVideos = (payload) => {
  return {
    type: "SET_CHANNEL_VIDEOS",
    payload,
  };
};

export const setNextPageToken = (token) => {
  return {
    type: "SET_CHANNEL_NEXT_PAGE_TOKEN",
    payload: token,
  };
};

export const setLoaded = (payload) => {
  return {
    type: "SET_CHANNEL_LOADED",
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: "SET_CHANNEL_ERROR",
    payload,
  };
};

export const setLazzyLoading = (payload) => {
  return {
    type: "SET_CHANNEL_LAZZY_LOADING",
    payload,
  };
};

export const setFetching = (payload) => {
  return {
    type: "SET_CHANNEL_FETCHING",
    payload,
  };
};
