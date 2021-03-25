import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxPromise from "redux-promise";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Reducers
//Import messages reducer and selected channel reducer

const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  currentUser:
    prompt("What is your username?") ||
    `anonymous${Math.floor(10 + Math.random() * 90)}`,
  selectedChannel: "general",
};

const reducers = combineReducers({
  messages: identityReducer, // messagesReducer
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: identityReducer, //selectedChannelReducer
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
