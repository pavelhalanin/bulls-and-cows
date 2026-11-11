import { gameStateSetValue } from "../../state/gameState";

export const gameSetMyValue = () => {
  const input = document.querySelector<HTMLInputElement>("#myvalue");
  const value = input?.value ?? "";
  gameStateSetValue(value);
};
