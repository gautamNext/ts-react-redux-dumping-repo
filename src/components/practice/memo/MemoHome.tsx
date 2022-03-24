import React, { useState } from "react";
import { customMemo } from "./customMemo";
import { RenderCount } from "./RenderCount";

const MemoisedRenderCount = customMemo(RenderCount);

export const MemoHome = () => {
  const [count, setcount] = useState(0);
  const [propsCount, setpropsCount] = useState(1);

  return (
    <div>
      <RenderCount count={propsCount} message="--------------Non memoised component--------------" />
      <MemoisedRenderCount count={propsCount} message="--------------Memoised component---------------" />
      <button onClick={() => setcount(1 + count)}>Update</button>

      <button onClick={() => setpropsCount(propsCount + 1)}>
        Click on this should update count, as state chnages
      </button>
    </div>
  );
};
