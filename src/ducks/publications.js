// Actions
const REQUEST = "post-preview/publications/REQUEST";
const RECIEVE = "post-preview/publications/RECIEVE";
const RECEIVED = "post-preview/publications/RECEIVED";

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
        started: true
      };
    case RECIEVE:
      return Object.assign({}, state, action.data);
    case RECEIVED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

// Action Creators
export function requestPublicationData() {
  return {
    type: REQUEST
  };
}

export function recievePublicationData(data) {
  return {
    type: RECIEVE,
    data: data
  };
}

export function publicationDataRecieved() {
  return { type: RECEIVED };
}


// side-effects
export function fetchPublication(text) {
  return dispatch => {
    dispatch(requestPublicationData());

    return fetch(`/.netlify/functions/open-graph-preview?q=${text}`)
      .then(response => response.json())
      .then(json => {
        dispatch(recievePublicationData(json));

        dispatch(publicationDataRecieved());
      });
  };
}
