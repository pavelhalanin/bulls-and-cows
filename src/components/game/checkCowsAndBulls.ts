import { evaluateGuess } from "../../logic/evaluateGuess";
import { isValidGuess } from "../../logic/isValidGuess";
import {
  gameStateGetBase,
  gameStateGetLength,
  gameStateGetSecret,
  gameStateGetValue,
} from "../../state/gameState";

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
  alert(JSON.stringify(score));
};
