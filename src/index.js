import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {Provider} from "react-redux";
import store from "./redux/configStore";
import {BrowserRouter} from "react-router-dom";
import App from "./companents/App/App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);