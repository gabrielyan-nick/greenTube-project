import axios from "axios";
import { BASE_URL, options } from "./videos";

export const fetchChannelDetail = (id) => (dispatch) => {
  axios
    .get(`${BASE_URL}/search?channelId=${id}&part=snippet&order=date`, options)
    .then((res) => {
      dispatch(setChannelVideos(res?.data?.items));
      dispatch(setChannelNextPageToken(res?.data?.nextPageToken));
    })
    .catch((e) => console.log(e));

  axios
    .get(`${BASE_URL}/channels?part=snippet&id=${id}`, options)
    .then((res) => {
      dispatch(setChannelDetail(res?.data?.items[0]));
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
