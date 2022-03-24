import React, { FunctionComponent, useRef, useState } from "react";

interface RenderCountProps {
  message: string;
  count: number;
}

export const RenderCount: FunctionComponent<RenderCountProps> = (props) => {
  const count = useRef(0);
  const [stateCount, setstateCount] = useState(1);

  return (
    <div>
      <div>{props.message}</div>
      <div>I have rendered {++count.current} times</div>

      <button onClick={() => setstateCount(stateCount + 1)}>
        Click on this should update count, as state chnages
      </button>
    </div>
  );
};
