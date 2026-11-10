import { startGame } from "../game/startGame";

export const newGameFormButton = () => {
  const button = document.createElement("button");
  button.classList.add("newGame__formButton");

  button.textContent = `Запусть игру`;
  button.onclick = () => startGame();

  return button;
};
