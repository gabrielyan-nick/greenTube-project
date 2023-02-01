const initialState = {
  video: {},
  relatedVideos: [],
  isLoaded: false,
  error: false,
};

const videoDetail = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEO_DETAIL":
      return {
        ...state,
        video: action.payload,
      };
      case "SET_VIDEO_DETAIL_ERROR":
        return {
          ...state,
          error: action.payload,
        };
      case "SET_RELATED_VIDEOS":
      return {
        ...state,
        relatedVideos: action.payload,
        isLoaded: true
      };
    default:
      return state;
  }
};

export default videoDetail;
