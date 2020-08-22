import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import Reducer from "./ReduxStore/Reducers/List";
import { Provider } from "react-redux";


const store = createStore(Reducer, applyMiddleware(Thunk));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
