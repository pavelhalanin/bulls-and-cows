import { app } from "../app";

export const headerNewGameButton = () => {
  const BUTTON = document.createElement("button");
  BUTTON.textContent = "Настройки";
  BUTTON.onclick = () => app("newGame");
  return BUTTON;
};
