const initialState = {
  channelDetail: [],
  channelVideos: [],
  nextPageToken: ''
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
        channelVideos: action.payload,
      };
      case "SET_CHANNEL_NEXT_PAGE_TOKEN":
        return {
          ...state,
          nextPageToken: action.payload,
        };
    default:
      return state;
  }
};

export default channelDetail;
