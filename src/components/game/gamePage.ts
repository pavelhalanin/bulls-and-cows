import { gameInput } from "./gameInput";
import "./game.css";

export const gamePage = () => {
  const SELECTOR = "#content";
  const CONTENT = document.querySelector(SELECTOR);
  if (!CONTENT) {
    throw new Error(`Node is not found: ${SELECTOR}`);
  }

  CONTENT.replaceChildren();

  const DIV = document.createElement("div");
  DIV.appendChild(gameInput());

  CONTENT.append(DIV);
};
