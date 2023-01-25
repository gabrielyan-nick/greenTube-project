const initialState = {
  items: [],
  isLoaded: false,
  nextPageToken: "",
  fetching: false,
};

const videos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    case "SET_NEXT_PAGE_TOKEN":
      return {
        ...state,
        nextPageToken: action.payload,
      };
      case "SET_FETCHING":
        return {
          ...state,
          fetching: action.payload,
        };
    default:
      return state;
  }
};

export default videos;
