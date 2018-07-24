import { POST_FETCH, RESPONSE_RECEIVE, RESPONSE_RECEIVED } from "./actionTypes";

export const postAction = text => {
  return dispatch => {
    dispatch({
      type: POST_FETCH
    });

    return fetch(`/.netlify/functions/open-graph-preview?q=${text}`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: RESPONSE_RECEIVE,
          data: json
        });

        dispatch({
          type: RESPONSE_RECEIVED
        });
      });
  };
};
