import React, { FunctionComponent, useState } from "react";
import { Game } from "./Game";
import { Players } from "./Players";
import { getPlayerList } from "./utility";

export type Sign = "X" | "O" | "Q";

export interface Player {
  name: string;
  sign: Sign;
}

export const Playground: FunctionComponent = () => {
  const playerList = getPlayerList();

  const [activePlayer, setActivePlayer] = useState(0);

  const handleActivePlayerChange = () => {
    setActivePlayer(activePlayer ? 0 : 1);
  };

  return (
    <div>
      <div>Playground</div>
      <Players activePlayer={playerList[activePlayer]} players={playerList} />
      <Game
        activePlayer={playerList[activePlayer]}
        onCellClick={handleActivePlayerChange}
      />
    </div>
  );
};
