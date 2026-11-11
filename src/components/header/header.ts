import "./header.css";
import { headerNewGameButton } from "./headerNewGameButton";
import { headerWinnersButton } from "./headerWinnersButton";

export const header = () => {
  const div = document.createElement("div");
  div.classList.add("header");
  div.appendChild(headerNewGameButton());
  div.appendChild(headerWinnersButton());
  return div;
};
