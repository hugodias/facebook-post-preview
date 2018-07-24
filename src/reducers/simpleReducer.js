import { POST_FETCH, RESPONSE_RECEIVE, RESPONSE_RECEIVED } from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case POST_FETCH:
      return {
        ...state,
        loading: true,
        started: true
      };
    case RESPONSE_RECEIVE:
      return Object.assign({}, state, action.data);
    case RESPONSE_RECEIVED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
