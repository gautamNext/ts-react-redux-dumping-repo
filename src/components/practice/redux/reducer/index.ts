import { Action } from "redux";

export enum ActionType {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY_RANDOM,
}

interface IncAction extends Action {
  value: number;
}

export default (state = 0, action: IncAction): number => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + 1;
    case ActionType.INCREMENT_BY_RANDOM:
      return state + action.value;
    case ActionType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
