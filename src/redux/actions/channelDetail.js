import axios from "axios";
import { BASE_URL, options } from "./videos";

export const fetchChannelDetail =
  (id, pageToken = "", bool = false) =>
  (dispatch) => {
    dispatch(setLoaded(bool));
    axios
      .get(`${BASE_URL}/channel?id=${id}&token=${pageToken}`, options) //.get(`${BASE_URL}/channels?part=snippet&id=${id}`, options)
      .then((res) => {
        if (pageToken === "") {
          dispatch(setChannelDetail(res?.data?.meta));
          dispatch(setChannelVideos(res?.data?.data));
          dispatch(setChannelNextPageToken(res?.data?.continuation));
        } else {
          dispatch(setLazzyLoading(res?.data?.data));
          dispatch(setChannelNextPageToken(res?.data?.continuation));
        }
      })
      .catch((e) => console.log(e));
  };

// export const fetchChannelVideos =
//   (id, pageToken = "") =>
//   (dispatch) => {
//     axios
//       .get(
//         `${BASE_URL}/search?channelId=${id}&part=snippet&order=date&pageToken=${pageToken}`,
//         options
//       )
//       .then((res) => {
//         dispatch(setChannelVideos(res?.data?.items));
//         dispatch(setChannelNextPageToken(res?.data?.nextPageToken));
//       })
//       .catch((e) => console.log(e));
//   };

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

export const setLazzyLoading = (payload) => {
  return {
    type: "SET_LAZZY_LOADING",
    payload,
  };
};