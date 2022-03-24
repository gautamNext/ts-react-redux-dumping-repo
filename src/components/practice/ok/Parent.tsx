import React, { FunctionComponent, ReactElement } from "react";

interface ParentProps {
  render: (name: string) => ReactElement;
}
export const Parent: FunctionComponent<ParentProps> = (props) => {
  const nameFromParent = "Parent State";

  return props.render(nameFromParent);
};
