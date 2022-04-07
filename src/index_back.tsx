import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { AppRoot } from "./components/AppRoot";

import * as _ from "./other-stuffs";
import reducer from "./components/practice/redux/reducer";
// import { loggerMiddleWare } from "./components/practice/redux/middleware/logger";
// import thunk from "redux-thunk";
// import { monitorReducerEnhancer } from "./components/practice/redux/enhancers/monitorReducer";

// eslint-disable-next-line no-console
console.log(_);

// const middlewareEnhancer = applyMiddleware(loggerMiddleWare, thunk);
// const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

// const store = createStore(reducer, undefined, composedEnhancers);

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <AppRoot />
  </Provider>
);

console.log(app);
ReactDOM.render(app, document.getElementById("root"));
