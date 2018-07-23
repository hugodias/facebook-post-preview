export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        started: true
      };
      return state;
    case "RECEIVE_RESPONSE":
      return Object.assign({}, state, ...action.data);
    case "FETCH_ENDED":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
