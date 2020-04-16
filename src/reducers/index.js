const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      if (state.myList.findIndex(item => item.id === action.payload.id) === -1) {
        return {
          ...state,
          myList: [...state.myList, action.payload],
        };
      }
      return state;
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.concat(state.originals).find(item => item.id === +action.payload) ||
        [],
      };
    case 'SET_SEARCH_VIDEO':
      return {
        ...state,
        search: action.payload ? state.trends.concat(state.originals)
          .filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())) : [],
      };
    default:
      return state;
  }
};
export default reducer;
