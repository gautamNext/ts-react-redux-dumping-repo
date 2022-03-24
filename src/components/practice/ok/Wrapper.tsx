import React from "react";
import { Children } from "./Children";
import { Parent } from "./Parent";

export const Wrapper = () => {
  return <Parent render={(name) => <Children name={name}/>} />;
};
