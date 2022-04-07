import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "./reducer";

interface CounterProps {}

export function Counter(props: CounterProps) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state as number);
  const listenClickOnlyOnceRef = useRef(true);
  function onDecrement() {
    dispatch({ type: ActionType.DECREMENT });
  }

  function onIncrement() {
    dispatch({ type: ActionType.INCREMENT });
  }

  function onIncrementByRandomNumber() {
    dispatch({ type: ActionType.INCREMENT_BY_RANDOM, value: Math.random() });
  }

  function incrementIfOdd() {
    if (value % 2 !== 0) {
      onIncrement();
    }
  }

  function incrementAsync() {
    if (listenClickOnlyOnceRef.current) {
      listenClickOnlyOnceRef.current = false;
      setTimeout(() => {
        onIncrement();
        listenClickOnlyOnceRef.current = true;
      }, 1000);
    }
  }

  return (
    <p>
      Clicked: {value} times <button onClick={onIncrement}>+</button>{" "}
      <button onClick={onDecrement}>-</button>{" "}
      <button onClick={onIncrementByRandomNumber}>Random+</button>
      <button onClick={incrementIfOdd}>Increment if odd</button>{" "}
      <button onClick={incrementAsync}>Increment async</button>
    </p>
  );
}
