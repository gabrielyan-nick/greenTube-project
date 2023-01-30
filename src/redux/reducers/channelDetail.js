const initialState = {
  channelDetail: [],
  channelVideos: [],
  isLoaded: false,
  nextPageToken: "",
  fetching: false,
};

const channelDetail = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHANNEL_DETAIL":
      return {
        ...state,
        channelDetail: action.payload,
      };
    case "SET_VIDEOS":
      return {
        ...state,
        channelVideos: action.payload,
        isLoaded: true,
        fetching: false,
      };
    case "SET_NEXT_PAGE_TOKEN":
      return {
        ...state,
        nextPageToken: action.payload,
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    case "SET_FETCHING":
      return {
        ...state,
        fetching: action.payload,
      };
    case "SET_LAZZY_LOADING":
      return {
        ...state,
        channelVideos: [...state.channelVideos, ...action.payload],
        isLoaded: true,
        fetching: false,
      };
    default:
      return state;
  }
};

export default channelDetail;
