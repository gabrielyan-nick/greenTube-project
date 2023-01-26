const initialState = {
  items: [],
  isLoaded: false,
  nextPageToken: "",
  fetching: false,
  category: "New",
};

const videos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return {
        ...state,
        items:
          state.items.length === 0
            ? action.payload
            : [...state.items, ...action.payload],

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
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
        items: [],
      };
    default:
      return state;
  }
};

export default videos;
