import "./gameWinners.css";
import { gameWinners } from "./gameWinners";

export const gameWinnersPage = () => {
  const selector = "#content";
  const content = document.querySelector(selector);
  if (!content) {
    throw new Error(`Node is not found: ${selector}`);
  }

  content.replaceChildren();

  const div = document.createElement("div");
  div.classList.add("game_winners__wrapper");

  div.appendChild(gameWinners());

  content.append(div);
};
