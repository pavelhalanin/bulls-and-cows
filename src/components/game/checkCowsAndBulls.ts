import { evaluateGuess } from "../../logic/evaluateGuess";
import { isValidGuess } from "../../logic/isValidGuess";
import {
  gameStateGetBase,
  gameStateGetLength,
  gameStateGetSecret,
  gameStateGetValue,
} from "../../state/gameState";
import { removeStartGame } from "../../state/gameStatus/removeStartGame";
import { addGameHistory } from "../../state/history/addGameHistory";
import { getGameHistory } from "../../state/history/getGameHistory";
import { addGameWinner } from "../../state/winners/addGameWinner";
import { app } from "../app";

export const checkCowsAndBulls = () => {
  const secret = gameStateGetSecret();
  const value = gameStateGetValue();

  const length = gameStateGetLength();
  const base = gameStateGetBase();

  const isValid = isValidGuess(value, +length, base);
  if (!isValid) {
    return;
  }

  const score = evaluateGuess(secret, value);

  addGameHistory({
    base: +base,
    length: +length,
    bulls: score.bulls,
    cows: score.cows,
    datetime: new Date().toJSON(),
    value: value,
  });

  if (+length === score.bulls) {
    const history = getGameHistory();
    const lastIndex = history.length - 1;

    addGameWinner({
      diffDateTime:
        new Date(history[lastIndex].datetime).getTime() -
        new Date(history[0].datetime).getTime(),
      datetime: new Date().toJSON(),
      attempts: history.length,
      base: history[lastIndex].base,
      length: history[lastIndex].length,
    });

    removeStartGame();
    app("game");
    return;
  }

  app("game");
};
