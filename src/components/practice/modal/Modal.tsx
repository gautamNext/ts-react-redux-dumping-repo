import React from "react";
import ReactDOM from "react-dom";

export const Modal: React.FunctionComponent = (props) => {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById("modal-root") as HTMLElement
  );
};
