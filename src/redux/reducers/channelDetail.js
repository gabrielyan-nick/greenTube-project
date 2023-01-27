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
    case "SET_CHANNEL_VIDEOS":
      return {
        ...state,
        channelVideos:
          state.channelVideos.length === 0
            ? action.payload
            : [...state.channelVideos, ...action.payload],
        isLoaded: true,
      };
    case "SET_CHANNEL_NEXT_PAGE_TOKEN":
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
    case "CLEAR_DATA":
      return initialState;

    default:
      return state;
  }
};

export default channelDetail;
