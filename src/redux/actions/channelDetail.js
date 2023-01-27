import axios from "axios";
import { BASE_URL, options } from "./videos";

export const fetchChannelDetail = (id) => (dispatch) => {
  dispatch(setLoaded(false));
  dispatch(clearData());
  axios
    .get(`${BASE_URL}/channels?part=snippet&id=${id}`, options)
    .then((res) => {
      dispatch(setChannelDetail(res?.data?.items[0]));
    })
    .catch((e) => console.log(e));
};

export const fetchChannelVideos =
  (id, pageToken = "") =>
  (dispatch) => {
    axios
      .get(
        `${BASE_URL}/search?channelId=${id}&part=snippet&order=date&pageToken=${pageToken}`,
        options
      )
      .then((res) => {
        dispatch(setChannelVideos(res?.data?.items));
        dispatch(setChannelNextPageToken(res?.data?.nextPageToken));
        dispatch(setFetching(false));
      })
      .catch((e) => console.log(e));
  };

export const setChannelDetail = (payload) => {
  return {
    type: "SET_CHANNEL_DETAIL",
    payload,
  };
};

export const setChannelVideos = (payload) => {
  return {
    type: "SET_CHANNEL_VIDEOS",
    payload,
  };
};

export const setChannelNextPageToken = (payload) => {
  return {
    type: "SET_CHANNEL_NEXT_PAGE_TOKEN",
    payload,
  };
};

export const setLoaded = (payload) => {
  return {
    type: "SET_LOADED",
    payload,
  };
};

export const setFetching = (payload) => {
  return {
    type: "SET_FETCHING",
    payload,
  };
};

export const clearData = () => {
  return {
    type: "CLEAR_DATA",
  };
};
