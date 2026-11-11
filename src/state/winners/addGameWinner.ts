import { getGameWinners } from "./getGameWinners";
import type { WinnerDto } from "./WinnerDto";

export const addGameWinner = (entry: WinnerDto): void => {
  const history = getGameWinners();
  const newArray = [...history, entry];
  localStorage.setItem("win", JSON.stringify(newArray));
};
