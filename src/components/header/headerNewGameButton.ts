import { newGamePage } from "../newGame/newGamePage";

export const headerNewGameButton = () => {
  const BUTTON = document.createElement("button");
  BUTTON.textContent = "Настройки";
  BUTTON.onclick = () => newGamePage();
  return BUTTON;
};
