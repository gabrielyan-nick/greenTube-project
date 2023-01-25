import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {},
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchVideos =
  (url, category = "", pageToken = "") =>
  (dispatch) => {
    dispatch(setLoaded(false));
    axios
      .get(
        `${BASE_URL}/${url}${category}&part=snippet,id&maxResults=50&pageToken=${pageToken}`,
        options
      )
      .then((res) => {
        dispatch(setVideos(res.data.items));
        dispatch(setNextPageToken(res.data.nextPageToken));
        dispatch(setFetching(false));
      })
      .catch((e) => console.log(e));
  };

const setLoaded = (payload) => {
  return {
    type: "SET_LOADED",
    payload,
  };
};

const setVideos = (payload) => {
  return {
    type: "SET_VIDEOS",
    payload,
  };
};

const setNextPageToken = (token) => {
  return {
    type: "SET_NEXT_PAGE_TOKEN",
    payload: token,
  };
};

const setFetching = (payload) => {
  return {
    type: "SET_FETCHING",
    payload,
  };
};

export { fetchVideos, setVideos, setLoaded, setNextPageToken, setFetching };
