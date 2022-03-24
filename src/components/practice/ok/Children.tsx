import React, { FunctionComponent } from "react";

interface ChildrenProps {
  name: string;
}

export const Children: FunctionComponent<ChildrenProps> = (props) => {
  return <div>Hello {props.name}</div>;
};
