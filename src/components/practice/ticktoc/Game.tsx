import React, { FunctionComponent, useState } from "react";
import { Player } from "./Playground";

interface GameProps {
  activePlayer: Player;
  onCellClick: () => void;
}

export const Game: FunctionComponent<GameProps> = (props) => {
  const EMPTY_CELL_CHAR: Player["sign"] = "Q";
  const [cells, setCells] = useState<Player["sign"][][]>([
    [EMPTY_CELL_CHAR, EMPTY_CELL_CHAR, EMPTY_CELL_CHAR],
    [EMPTY_CELL_CHAR, EMPTY_CELL_CHAR, EMPTY_CELL_CHAR],
    [EMPTY_CELL_CHAR, EMPTY_CELL_CHAR, EMPTY_CELL_CHAR],
  ]);
  const [gameOver, setgameOver] = useState(false);

  const ifCurrentPlayerWon = (
    currentSign: string,
    outerIndex: number,
    innnerIndex: number
  ) => {
    let win = true;
    for (let index = 0; index < cells.length; index++) {
      if (cells[index][innnerIndex] !== currentSign) {
        win = false;
      }
    }
    if (win) {
      return win;
    }

    win = true;

    for (let index = 0; index < cells.length; index++) {
      if (cells[outerIndex][index] !== currentSign) {
        win = false;
      }
    }
    if (win) {
      return win;
    }

    if (
      innnerIndex === outerIndex ||
      Math.abs(innnerIndex - outerIndex) === 2
      //
    ) {
    } else {
      return win;
    }

    return win;
  };

  const checkIfCelllIsEmpty = (outerIndex: number, innerIndex: number) => {
    return cells[outerIndex][innerIndex] === EMPTY_CELL_CHAR;
  };

  const handleClickOnCell = (outerIndex: number, innerIndex: number) => {
    if (checkIfCelllIsEmpty(outerIndex, innerIndex)) {
      const { sign } = props.activePlayer;
      cells[outerIndex][innerIndex] = sign;
      setCells([...cells]);
      if (ifCurrentPlayerWon(sign, outerIndex, innerIndex)) {
        setgameOver(true);
      } else {
        props.onCellClick();
      }
    }
  };

  return (
    <div>
      <div>
        Game{" "}
        {gameOver ? `Over, ${props.activePlayer.name} Won!!!` : "in progress"}
      </div>
      <div>
        {cells.map((innerCells, outerIndex) => {
          return (
            <div key={outerIndex}>
              {innerCells.map((cell, innerIndex) => {
                return (
                  <span key={innerIndex}>
                    <button
                      onClick={() => handleClickOnCell(outerIndex, innerIndex)}
                    >
                      {cell}
                    </button>
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
