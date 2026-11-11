import { getGameHistory } from "../history/getGameHistory";
import { removeStartGame } from "./removeStartGame";
import { setStartGame } from "./setStartGame";

export const isGameStarted = (): boolean => {
  const str = localStorage.getItem("isGameStarted");
  if (!str) {
    removeStartGame();
    return false;
  }

  const history = getGameHistory();

  for (let i = 0; i < history.length; i++) {
    const current = history[i];
    if (current.length === current.bulls) {
      removeStartGame();
      return false;
    }
  }

  if (history.length > 0) {
    setStartGame();
    return true;
  }

  return str === "started";
};
