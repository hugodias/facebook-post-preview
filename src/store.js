import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
export default function configureStore(
  initialState = {
    default: {
      started: false,
      loading: true,
      text:
        "This is a publication with URL https://codeburst.io/extracting-a-react-js-component-and-publishing-it-on-npm-2a49096757f5",
      meta: {},
      error: null
    }
  }
) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
