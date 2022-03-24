import React from "react";
import ReactDOM from "react-dom";
import { AppRoot } from "./components/AppRoot";

import * as _ from "./other-stuffs";

// eslint-disable-next-line no-console
console.log(_);
const app = <AppRoot />;

console.log(app);
ReactDOM.render(app, document.getElementById("root"));
