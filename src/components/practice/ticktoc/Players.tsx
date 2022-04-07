import React, { FunctionComponent } from "react";
import { Player } from "./Playground";

interface PlayersProps {
  players: readonly Player[];
  activePlayer: Player;
}

export const Players: FunctionComponent<PlayersProps> = (props) => {
  return (
    <ul>
      {props.players.map((player) => {
        return (
          <li key={player.name}>
            {player.name}{" "}
            {props.activePlayer.name === player.name && " > Active"}{" "}
          </li>
        );
      })}
    </ul>
  );
};
