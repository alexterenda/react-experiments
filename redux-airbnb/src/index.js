import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import flatsReducer from "./reducers/flats_reducer";
import selectedFlatReducer from "./reducers/selected_flat_reducer";

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
