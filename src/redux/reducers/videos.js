const initialState = {
  items: [],
  isLoaded: false,
  nextPageToken: "",
  fetching: false,
  category: "New",
  error: false,
};

const videos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
        fetching: false,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
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
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
        items: [],
      };
    case "SET_LAZZY_LOADING":
      return {
        ...state,
        items: [...state.items, ...action.payload],
        isLoaded: true,
        fetching: false,
      };

    default:
      return state;
  }
};

export default videos;
