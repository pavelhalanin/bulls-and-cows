import { newGameBaseRadio } from "./newGameBaseRadio";
import { newGameFormButton } from "./newGameFormButton";
import { newGameLengthRadio } from "./newGameLengthRadio";
import "./newGame.css";

export const newGamePage = () => {
  const selector = "#content";
  const content = document.querySelector(selector);
  if (!content) {
    throw new Error(`Node is not found: ${selector}`);
  }

  content.replaceChildren();

  const div = document.createElement("div");
  div.classList.add("newGame__wrapper");

  div.appendChild(newGameLengthRadio());
  div.appendChild(newGameBaseRadio());
  div.appendChild(newGameFormButton());
  content.append(div);
};
