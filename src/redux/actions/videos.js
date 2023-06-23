import axios from "axios";

export const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

export const options = {
  headers: {
    "X-RapidAPI-Key": '10a44e84d0mshde99617f2983deep158d46jsne48c15549c7d',
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchVideos =
  (category, pageToken = "", bool = false) =>
  (dispatch) => {
    dispatch(setError(false));
    dispatch(setLoaded(bool));
    axios
      .get(`${BASE_URL}/search?query=${category}&token=${pageToken}`, options)
      .then((res) => {
        if (pageToken === "") {
          dispatch(setVideos(res.data.data));
          dispatch(setNextPageToken(res.data.continuation));
        } else {
          dispatch(setLazzyLoading(res.data.data));
          dispatch(setNextPageToken(res.data.continuation));
        }
      })
      .catch((e) => {
        dispatch(setError(true));
        console.log(e);
      });
  };

export const setLoaded = (payload) => {
  return {
    type: "SET_LOADED",
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: "SET_ERROR",
    payload,
  };
};

export const setVideos = (payload) => {
  return {
    type: "SET_VIDEOS",
    payload,
  };
};

export const setNextPageToken = (token) => {
  return {
    type: "SET_NEXT_PAGE_TOKEN",
    payload: token,
  };
};

export const setFetching = (payload) => {
  return {
    type: "SET_FETCHING",
    payload,
  };
};

export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: category,
  };
};

export const setLazzyLoading = (payload) => {
  return {
    type: "SET_LAZZY_LOADING",
    payload,
  };
};
