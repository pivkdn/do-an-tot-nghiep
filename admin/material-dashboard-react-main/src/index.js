/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import { Provider } from 'react-redux'
// Soft UI Context Provider
import { MaterialUIControllerProvider } from "context";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import allReducers from '../src/redux/reducers/rootReducers'
import rootSaga from '../src/redux/saga/rootSagas'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  allReducers,
  applyMiddleware(sagaMiddleware)
)
ReactDOM.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </BrowserRouter>
     
    </Provider>,
  document.getElementById("root")
);
sagaMiddleware.run(rootSaga);
