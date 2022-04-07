import { Player } from "./Playground";

export function getPlayerList(): readonly Player[] {
  return [
    {
      name: "Player 1",
      sign: "O",
    },
    {
      name: "Player 2",
      sign: "X",
    },
  ];
}

// function getArena() {}
