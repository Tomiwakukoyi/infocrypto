import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//this is the provider
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
//this is the variable we provide to the provider
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {/* we use the provider here and pass the store as store to the provider */}
    {/** every component in the app will have access to the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
