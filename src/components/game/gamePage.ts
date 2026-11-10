import { gameInput } from "./gameInput";
import "./game.css";
import { gameHistory } from "./gameHistory";

export const gamePage = () => {
  const selector = "#content";
  const content = document.querySelector(selector);
  if (!content) {
    throw new Error(`Node is not found: ${selector}`);
  }

  content.replaceChildren();

  const div = document.createElement("div");
  div.classList.add("game__wrapper");
  div.appendChild(gameInput());
  div.appendChild(gameHistory());

  content.append(div);
};
