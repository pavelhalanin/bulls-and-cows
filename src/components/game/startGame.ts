import { generateSecret } from "../../logic/generateSecret";
import {
  gameStateGetBase,
  gameStateGetLength,
  gameStateSetSecret,
} from "../../state/gameState";
import { app } from "../app";

export const startGame = () => {
  const base = gameStateGetBase();
  const length = gameStateGetLength();
  const secret = generateSecret(+length, base);
  gameStateSetSecret(secret);

  app("game");
};
