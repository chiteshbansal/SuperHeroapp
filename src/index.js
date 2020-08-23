import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import Reducer from "./ReduxStore/Reducers/List";
import { Provider } from "react-redux";

// store is created and redux-thunk is used to handler asyn function calls
// using action creators 
const store = createStore(Reducer, applyMiddleware(Thunk));
ReactDOM.render(
  //Provider is used to make all the child components of App 
  // to be able to use redux store 
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
