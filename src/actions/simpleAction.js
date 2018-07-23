export const simpleAction = text => {
  return dispatch => {
    dispatch({
      type: "FETCH_START"
    });

    return fetch(`/.netlify/functions/open-graph-preview?q=${text}`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: "RECEIVE_RESPONSE",
          data: json
        });

        dispatch({
          type: "FETCH_ENDED"
        });
      });
  };
};
