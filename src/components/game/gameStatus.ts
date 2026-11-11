import { getGameHistory } from "../../state/history/getGameHistory";
import { app } from "../app";

export const gameStatus = () => {
  const div = document.createElement("div");

  const history = getGameHistory();
  if (history.length < 1) {
    return div;
  }

  for (let i = 0; i < history.length; i++) {
    const current = history[i];
    if (current.bulls === current.length) {
      div.textContent = `Вы выиграли, так как отгадали число: ${current.value} (быков - ${current.bulls})`;
      div.style.fontSize = "2em";
      div.style.color = "green";

      const button = document.createElement("button");
      button.textContent = "Новая игра";
      button.classList.add("game__new_game_button");
      button.onclick = () => app("newGame");

      div.appendChild(button);
      return div;
    }
  }

  return div;
};
